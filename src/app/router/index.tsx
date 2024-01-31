import {createBrowserRouter} from "react-router-dom";
import {LoadComponent} from "@app/common/route";
import {lazy} from "react";

const MainPage = LoadComponent(lazy(async () => import("@app/pages/main")))

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
]);

export default router
