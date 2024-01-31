import {ICreateExceptionPayload, IExceptionStatus} from "./interface";


class ExceptionService<TData> extends Error {

  public readonly code: number

  public readonly data?: TData

  private constructor (statusCode: IExceptionStatus, data?: TData) {
    super()

    this.name = this.constructor.name

    this.code = statusCode.code
    this.message = statusCode.message
    this.data = data

    // if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(this, this.constructor)
  }

  public static new<TData>(payload: ICreateExceptionPayload<TData>): ExceptionService<TData> {
    return new ExceptionService<TData>(payload.status, payload.data)
  }

}

export { ExceptionService }
