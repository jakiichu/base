interface IStorage<TName extends string> {
  get<TResponse>(key: TName): TResponse

  set<TPayload>(key: TName, payload: TPayload): void

  remove(key: TName): void

  clear(): void
}

interface IContainerCrop {
  id: string
  number: string
  isLinkExportMove?: boolean
  isLinkImportMove?: boolean
}


export type { IStorage, IContainerCrop }
