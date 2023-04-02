import { Either } from '../../../core/Either'
import { APIErrorMessage } from './APIErrorMessage'
export type PaginatedResult<T> = {
  data: T[]
  total: number
}

export type APIResponse<T> = Either<APIErrorMessage, T>

export type PaginatedAPIResponse<T> = Either<
  APIErrorMessage,
  PaginatedResult<T>
>
