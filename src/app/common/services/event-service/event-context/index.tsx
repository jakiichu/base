import { createContext, useCallback, useContext, useMemo } from 'react'

import { EventPublisher } from '../event-publisher'

import type { FC, PropsWithChildren } from 'react'

import type { IEventPayload } from '../event-publisher'

import type { IEventObserver } from '../interface/event-observer'

type SubscribeMethod = (observer: IEventObserver) => void
type UnsubscribeMethod = (observer: IEventObserver) => void
type NotifyMethod = (payload: IEventPayload) => Promise<void>

interface IEventContext {
  subscribe: SubscribeMethod
  unsubscribe: UnsubscribeMethod
  notify: NotifyMethod
}

const defaultValue: IEventContext = {
  subscribe: (): void => {
    //
  },
  unsubscribe: (): void => {
    //
  },
  notify: async (): Promise<void> => {
    //
  }
}

const EventContext = createContext<IEventContext>(defaultValue)

const useEventContext = (): IEventContext => useContext(EventContext)

const publisher = new EventPublisher()

const EventProvider: FC<PropsWithChildren> = ({ children }) => {
  const subscribe = useCallback((observer: IEventObserver): void => {
    publisher.subscribe(observer)
  }, [publisher])

  const unsubscribe = useCallback((observer: IEventObserver): void => {
    publisher.unsubscribe(observer)
  }, [publisher])

  const notify = useCallback(async (payload: IEventPayload): Promise<void> => {
    await publisher.notify(payload)
  }, [publisher])

  const context = useMemo(() => ({
    subscribe,
    unsubscribe,
    notify
  }), [subscribe, unsubscribe, notify])

  return (
    <EventContext.Provider value={ context }>
      { children }
    </EventContext.Provider>
  )
}

export {
  EventProvider,
  useEventContext
}
