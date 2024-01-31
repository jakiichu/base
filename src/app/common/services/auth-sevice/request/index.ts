import Cookies from "js-cookie"
import {AxiosError} from 'axios'
import {IRouterContextProps} from "../../auth-sevice";
import {ECookieValues} from "@domain/common/enum/cookie-values";

const loadUserDependencies = async (
    setAuthData: (
        auth: IRouterContextProps['isAuth'],
        userPayload: IRouterContextProps['user']
    ) => void
): Promise<undefined> => {
    // const {MeUserRequest} = UserRepository()

    if (Cookies.get(ECookieValues.REFRESH_TOKEN)) {
        try {
            // const data = await MeUserRequest()
            //
            // setAuthData(true, data)
            // return data
        } catch (e: unknown) {
            const error = e as AxiosError
            if (error.response?.config.url !== '/auth/refresh') {
                setAuthData(false, null)
            }
        }
    } else {
        setAuthData(false, null)
    }
}

export {loadUserDependencies}
