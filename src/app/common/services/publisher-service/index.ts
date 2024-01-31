import {IObserver, IPublisher} from "../event-service/interface/observer";


abstract class PublisherService<Observer extends IObserver<Payload>, Payload> implements IPublisher<Observer, Payload> {

  protected _observers: Observer[] = []

  public subscribe (observer: Observer): void {
    this._observers.push(observer)
  }

  public unsubscribe (observer: Observer): void {
    const observerIndex = this._observers.indexOf(observer)
    if (observerIndex === -1) return
    this._observers.splice(observerIndex, 1)
  }

  public notify (payload?: Payload): void {
    for (const observer of this._observers) {
      observer.update(payload)
    }
  }

}

export { PublisherService }
