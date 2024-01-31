import { useEffect, useState } from 'react'
import { loadUserDependencies } from './request'
import type { UseAuthConfirmFn } from '.'

const useAuthConfirm: UseAuthConfirmFn = (setAuthData, isAuth) => {
	const [isLoading, setIsLoading] = useState(true)
	const TIMEOUT = 1000

	useEffect((): void | (() => void) => {
		const timeoutAction = setTimeout(() => {
			setIsLoading(false)
		}, TIMEOUT)

		return () => {
			clearTimeout(timeoutAction)
		}
	}, [isAuth])

	useEffect(() => {
		void loadUserDependencies(setAuthData)
	}, [])

	return { isLoading: isLoading }
}

export default useAuthConfirm
