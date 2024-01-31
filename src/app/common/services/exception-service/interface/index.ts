interface IExceptionStatus {
  code: number
  message: string
}

interface ICreateExceptionPayload<TData> {
  status: IExceptionStatus
  data?: TData
}

export type { IExceptionStatus, ICreateExceptionPayload }
