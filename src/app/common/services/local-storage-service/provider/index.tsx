import {ELocalStorageValues} from "../../local-storage-service/interfaces";
import {LocalStorageService} from "../../local-storage-service";

const localStorage = new LocalStorageService()

const LocalStorageProvider = (): JSX.Element | null => {
    const LocalStorageValuesEntries = Object.values(ELocalStorageValues)
    LocalStorageValuesEntries.map((value) => {
        try {
            localStorage.get(value)
        } catch (e) {
            localStorage.set(value, null)
        }
    })
    return <></>

}

export {
    LocalStorageProvider
}
