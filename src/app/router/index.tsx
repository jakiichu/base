import {createBrowserRouter} from "react-router-dom";
import {GUARDS, LoadComponent} from "@app/common/route";
import {lazy} from "react";
import {ERoutePaths} from './enum'

const MainPage = LoadComponent(lazy(async () => import("@app/pages/main")))
const AuthPage = LoadComponent(lazy(async () => import("@app/pages/passport")))

const router = createBrowserRouter([
    {
        path: ERoutePaths.PASSPORT_AUTH,
        element: <AuthPage/>,
    },
    {
        element: <GUARDS.AuthGuard navigateToFail={ERoutePaths.PASSPORT_AUTH}/>,
        children: [
            {
                path: ERoutePaths.MAIN_PATH,
                element: <MainPage/>,
            }
        ]
    },
]);

export default router
