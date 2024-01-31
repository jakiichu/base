import type {FC, NamedExoticComponent} from 'react'
import {memo, Suspense} from 'react'

import {Navigate, Outlet} from 'react-router-dom'

import {useAuthContext} from '../services/auth-sevice'

/**
 * Router provider
 */


const AuthGuard: FC<{ navigateToFail?: string }> = ({navigateToFail = '/'}) => {
    const {isAuth} = useAuthContext()
    if (isAuth) return <Outlet/>
    return <Navigate to={navigateToFail}/>
}


const GuestGuard: FC<{ navigateToFail?: string }> = ({navigateToFail = '/'}) => {
    const {isAuth} = useAuthContext()
    if (!isAuth) return <Outlet/>
    return <Navigate to={navigateToFail}/>
}

const GUARDS = {
    GuestGuard,
    AuthGuard,
}

/**
 * Lazy loading components
 *
 * @param Component
 * @constructor
 */

const LoadComponent = <Props extends object, >(Component: FC<Props>): NamedExoticComponent<Props> => memo((props) => (
    <Suspense fallback={<div/>}>
        <Component {...props} />
    </Suspense>
))

export {
    LoadComponent,
    GUARDS,
}
