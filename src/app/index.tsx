import {RouterProvider} from "react-router-dom";
import router from "@app/router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SnackbarProvider} from "notistack";
import {EventProvider} from "@app/common/services/event-service";
import {LocalStorageProvider} from "@app/common/services/local-storage-service/provider";
import {AuthProvider} from "@app/common/services/auth-sevice";

const client = new QueryClient({
    defaultOptions: {
        mutations: {
            retry: false,
            networkMode: "always",
        },
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            networkMode: "always",
        },
    },
});

const App = () => {
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={3000}
            action={(snackbarId) => snackbarId}
        >
            <EventProvider>
                <QueryClientProvider client={client}>
                    <AuthProvider>
                        <LocalStorageProvider/>
                        <RouterProvider router={router}/>
                    </AuthProvider>
                </QueryClientProvider>
            </EventProvider>
        </SnackbarProvider>
    )
}

export default App
