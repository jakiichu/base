import type {IEventObserver, IEventPayload} from '../interface/event-observer'
import {PublisherService} from "../../publisher-service";


class EventPublisher extends PublisherService<IEventObserver, IEventPayload> {

    public override async notify(payload: IEventPayload): Promise<void> {
        for (const observer of this._observers) {
            if (observer.name === payload.name) {
                await observer.update(payload)
            }
        }
    }

}

export {EventPublisher}

export type {IEventPayload}
