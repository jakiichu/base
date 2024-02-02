import React, {LegacyRef, Ref} from "react";
import {EVariantSnackbar, ISnackbarComponentProps, SnackbarComponentBase} from "../..";


const SnackbarComponentWarning = React.forwardRef(
    (props: ISnackbarComponentProps, ref: LegacyRef<HTMLDivElement>) => {
        return (
            <>
                <SnackbarComponentBase {...props} EVariantSnackbar={EVariantSnackbar.WARNING}
                                       ref={ref as Ref<HTMLDivElement>}/>
            </>
        );
    },
);

export {SnackbarComponentWarning}