

/**
 * 获取联合类型的 key
 * @example
    type Name = { name: string }
    type Age = { age: number }
    type Union = Name | Age
    type T = UnionKey<Union> // 'name' | 'age'
 */
export type UnionKey<P> = P extends infer P ? keyof P : never
