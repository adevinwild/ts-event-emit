import { EventEmitter as NodeEventEmitter } from "events";

export default class EventEmitter<T extends string> extends NodeEventEmitter {
  addListener(event: T, listener: (...args: any[]) => void): this {
    return super.addListener(event, listener);
  }

  on(event: T, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  once(event: T, listener: (...args: any[]) => void): this {
    return super.once(event, listener);
  }

  off(event: T, listener: (...args: any[]) => void): this {
    return super.off(event, listener);
  }

  removeListener(event: T, listener: (...args: any[]) => void): this {
    return super.removeListener(event, listener);
  }

  removeAllListeners(event?: T): this {
    return super.removeAllListeners(event);
  }

  emit(event: T, ...args: any[]): boolean {
    return super.emit(event, ...args);
  }

  eventNames(): Array<T> {
    return super.eventNames() as Array<T>;
  }

  listenerCount(eventName: T): number {
    return super.listenerCount(eventName);
  }

  listeners(event: T): Function[] {
    return super.listeners(event);
  }

  prependListener(event: T, listener: (...args: any[]) => void): this {
    return super.prependListener(event, listener);
  }

  prependOnceListener(event: T, listener: (...args: any[]) => void): this {
    return super.prependOnceListener(event, listener);
  }

  rawListeners(event: T): Function[] {
    return super.rawListeners(event);
  }
}
