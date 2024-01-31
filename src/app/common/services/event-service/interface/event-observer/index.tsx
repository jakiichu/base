
import {IObserver} from "../observer";

interface IEventObserver<Data = unknown, Payload = IEventPayload<Data>> extends IObserver<Payload> {
  name: string

  update(payload?: Payload): Promise<void>
}

interface IEventPayload<T = unknown> {
  name: string
  data?: T
}

export type { IEventObserver, IEventPayload }
