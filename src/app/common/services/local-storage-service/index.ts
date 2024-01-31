import {IStorage, ELocalStorageValues} from "./interfaces";
import {ExceptionService} from "@app/common/services/exception-service";


class LocalStorageService implements IStorage<ELocalStorageValues> {

    private readonly _driver: Storage

    constructor() {
        this._driver = localStorage
    }

    public get<TResponse>(key: ELocalStorageValues): TResponse {
        const value = this._driver.getItem(key)
        if (value === null) {
            throw ExceptionService.new({
                status: {
                    code: 404,
                    message: `Property ${key} not found in ${this.constructor.name}`
                }
            })
        }

        return JSON.parse(value) as unknown as TResponse
    }

    public set<TPayload>(key: ELocalStorageValues, payload: TPayload): void {
        this._driver.setItem(key, JSON.stringify(payload))
    }

    public remove(key: ELocalStorageValues): void {
        this._driver.removeItem(key)
    }

    public clear(): void {
        this._driver.clear()
    }

}

export {LocalStorageService}
