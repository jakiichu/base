import {SnackbarKey} from "notistack";
import {EVariantSnackbar} from "..";

interface ISnackbarComponentProps {
    style: unknown;
    message: string;
    EVariantSnackbar: EVariantSnackbar

    action(): SnackbarKey;
}

export type {
    ISnackbarComponentProps
}