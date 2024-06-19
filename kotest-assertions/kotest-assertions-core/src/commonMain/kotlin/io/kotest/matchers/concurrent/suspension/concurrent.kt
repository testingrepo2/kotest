package io.kotest.matchers.concurrent.suspension

import io.kotest.assertions.assertSoftly
import io.kotest.assertions.failure
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.withTimeout
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.coroutineContext
import kotlin.time.Duration
import kotlin.time.TimeSource
import kotlin.time.measureTimedValue

/**
 * Assert [operation] completes within [duration].
 *
 * Note: It does not work well within [assertSoftly].
 * If used within [assertSoftly] and this assertion fails, any subsequent assertion won't run.
 */
suspend fun <A> shouldCompleteWithin(duration: Duration, operation: suspend () -> A): A {
   try {
      return withTimeout(duration) {
         operation()
      }
   } catch (ex: TimeoutCancellationException) {
      throw failure("Operation should have completed within $duration")
   }
}

/**
 * Assert [operation] completes within [durationRange].
 *
 * Note: It does not work well within [assertSoftly].
 * If used within [assertSoftly] and this assertion fails, any subsequent assertion won't run.
 */
suspend fun <A> shouldCompleteBetween(
   durationRange: ClosedRange<Duration>,
   operation: suspend () -> A,
): A {
   try {
      val timeSource = ShouldCompleteBetweenTimeSource.current()
      val (value, timeElapsed) = timeSource.measureTimedValue {
         withTimeout(durationRange.endInclusive) {
            operation()
         }
      }

      if (durationRange.start > timeElapsed) {
         throw failure("Operation should not have completed before ${durationRange.start}")
      }

      return value

   } catch (ex: TimeoutCancellationException) {
      throw failure("Operation should have completed within $durationRange")
   }
}

/**
 * Assert [operation] does not complete within [duration].
 *
 * Note: It does not work well within [assertSoftly].
 * If used within [assertSoftly] and this assertion fails, any subsequent assertion won't run.
 */
suspend fun <A> shouldTimeout(duration: Duration, operation: suspend () -> A) {
   try {
      withTimeout(duration) {
         operation()
      }
      throw failure("Operation should not have completed before $duration")
   } catch (_: TimeoutCancellationException) {
      // ignore timeout
   }
}


/**
 * Store a [TimeSource] to be used by [shouldCompleteBetween].
 */
internal class ShouldCompleteBetweenTimeSource(
   val timeSource: TimeSource
) : CoroutineContext.Element {

   override val key: CoroutineContext.Key<ShouldCompleteBetweenTimeSource>
      get() = KEY

   internal companion object {
      /**
       * Retrieves the [TimeSource] used by [shouldCompleteBetween].
       *
       * For internal Kotest testing purposes the [TimeSource] can be overridden.
       * For normal usage [TimeSource.Monotonic] is used.
       */
      internal suspend fun current(): TimeSource =
         coroutineContext[KEY]?.timeSource
            ?: TimeSource.Monotonic

      internal val KEY = object : CoroutineContext.Key<ShouldCompleteBetweenTimeSource> {}
   }
}