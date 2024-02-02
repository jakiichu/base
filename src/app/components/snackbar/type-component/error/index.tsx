import React, {LegacyRef, Ref} from "react";
import {EVariantSnackbar, ISnackbarComponentProps, SnackbarComponentBase} from "../..";


const SnackbarComponentError = React.forwardRef(
    (props: ISnackbarComponentProps, ref: LegacyRef<HTMLDivElement>) => {
        return (
            <>
                <SnackbarComponentBase {...props} EVariantSnackbar={EVariantSnackbar.ERROR}
                                       ref={ref as Ref<HTMLDivElement>}/>
            </>
        );
    },
);

export {SnackbarComponentError}