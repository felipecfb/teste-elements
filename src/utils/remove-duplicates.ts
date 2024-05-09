export function removeDuplicates<T>(array: T[] | undefined): T[] {
  return Array.from(new Set(array))
}
