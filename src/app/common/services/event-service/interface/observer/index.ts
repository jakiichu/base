interface IObserver<Payload> {
  update(payload?: Payload): void
}

interface IPublisher<Observer extends IObserver<Payload>, Payload> {
  subscribe(observer: Observer): void

  unsubscribe(observer: Observer): void

  notify(payload?: Payload): void
}

export type { IObserver, IPublisher }
