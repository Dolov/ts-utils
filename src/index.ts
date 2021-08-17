

/**
 * 获取联合类型的 key
 * @example
		type Name = { name: string }
		type Age = { age: number }
		type Union = Name | Age
		type T = UnionKey<Union> // 'name' | 'age'
 */
export type UnionKey<P> = P extends infer P ? keyof P : never

/**
 * 完整显示 api 信息，隐藏内部细节
 * @notes 要注意的是这不适用于联合类型
 * @example
 * interface Man {
 *    height: number
 *    age: number
 * }
 * type keys = Simplify<Man>
 */
export type Simplify<T> = Pick<T, keyof T>



