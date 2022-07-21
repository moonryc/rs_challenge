export * from './nbaTypes'
export * from './weatherTypes'
export * from './globalStoreTypes'

export interface IAction<T> {
  action: T
  payload?: any
}
