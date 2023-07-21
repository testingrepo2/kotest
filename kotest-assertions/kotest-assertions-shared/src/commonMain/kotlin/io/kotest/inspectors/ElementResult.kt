package io.kotest.inspectors

internal sealed interface ElementResult<out T> {
   val index: Int
   val value: T
}

internal class ElementPass<out T>(
   override val index: Int,
   override val value: T
) : ElementResult<T>

internal class ElementFail<out T>(
   override val index: Int,
   override val value: T,
   val error: Throwable
) : ElementResult<T>
