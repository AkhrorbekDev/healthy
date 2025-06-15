type Nullable<T> = T | null | undefined
type PathKey<T, K> = `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}`
type Paths<T> = T extends object ? { [K in keyof T]: PathKey<T, K> }[keyof T] : never
type Intersection<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First & Intersection<Rest> : unknown
