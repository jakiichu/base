import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import useAuthConfirm from './hook'
import {IUserPortEntityDto} from "@domain/login/dto";

/**
 * Auth Context
 */

interface IRouterContextProps {
	isAuth: boolean
	user: null | IUserPortEntityDto
	setAuthData: SetAuthData
	setUser: Dispatch<SetStateAction<IRouterContextProps['user']>>
	setIsAuth: Dispatch<SetStateAction<IRouterContextProps['isAuth']>>
}

type SetAuthData = (
	auth: IRouterContextProps['isAuth'],
	user: IRouterContextProps['user']
) => void

const defaultContextValue = {
	isAuth: false,
	user: null,
	setAuthData: (): void => {
		//
	},
	setUser: (): void => {
		//
	},
	setIsAuth: (): void => {
		//
	},
}

const AuthContext = createContext<IRouterContextProps>(defaultContextValue)

const useAuthContext = (): IRouterContextProps => useContext(AuthContext)

const AuthProvider = ({ children }: PropsWithChildren): JSX.Element | null => {
	const [isAuth, setIsAuth] = useState(defaultContextValue.isAuth)
	const [user, setUser] = useState<IRouterContextProps['user']>(
		defaultContextValue.user
	)
	const [isLoaderShow, setIsLoaderShow] = useState(true)

	const setAuthData = useCallback(
		(
			auth: IRouterContextProps['isAuth'],
			userPayload: IRouterContextProps['user']
		): void => {
			setIsAuth(auth)
			setUser(userPayload)
		},
		[]
	)

	const { isLoading } = useAuthConfirm(setAuthData, isAuth)

	useEffect((): void | (() => void) => {
		if (!isLoading) {
			const DELAY = 500
			const timeoutAction = setTimeout(() => {
				setIsLoaderShow(false)
			}, DELAY)

			return () => {
				clearTimeout(timeoutAction)
			}
		}
	}, [isLoading])

	const newContext = useMemo(
		() => ({
			isAuth,
			user,
			setAuthData,
			setUser,
			setIsAuth,
		}),
		[isAuth, user, setAuthData, setIsAuth, setUser]
	)

	return (
		<AuthContext.Provider value={newContext}>
			{isLoaderShow && <div className="w-full h-full fixed z-50" />}

			{!isLoading && children}
		</AuthContext.Provider>
	)
}

type UseAuthConfirmFn = (
	setAuthData: IRouterContextProps['setAuthData'],
	isAuth: IRouterContextProps['isAuth']
) => {
	isLoading: boolean
}

export type { UseAuthConfirmFn, IRouterContextProps, SetAuthData }

export { AuthProvider, useAuthContext }
