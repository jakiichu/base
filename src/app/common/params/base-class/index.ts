import {CryptData} from "../abstract-class";

class Params<T> extends CryptData {
    constructor(key?: number) {
        super(key ?? 0);
    }
 
    public getAllParams(): T {
        return Object.fromEntries(new URLSearchParams(window.location.search).toString().split('&')
            .map((item: string) => item.split('=')
                .map((item, index) => index === 1 ? this._decrypt(item) : item))) as T
    }

    public getParamsOne<K extends keyof T>(item: T[K]): unknown {
        return this._decrypt(new URLSearchParams(window.location.search).get(item as string) as string)
    }

    public setParams(url: string, params: T): string {
        return `${url}?${this.createParamsString(params)}`
    }

    public createParamsString(params: T): string {
        return Object.entries(params as {
            [s: string]: unknown
        }).map(key => `${key[0]}=${this._crypt(key[1] as string)}`).join('&')
    }
}


export {Params}