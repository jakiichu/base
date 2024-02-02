import React, {LegacyRef, Ref} from "react";
import {EVariantSnackbar, ISnackbarComponentProps, SnackbarComponentBase} from "../..";


const SnackbarComponentSuccess = React.forwardRef(
    (props: ISnackbarComponentProps, ref: LegacyRef<HTMLDivElement>) => {
        return (
            <>
                <SnackbarComponentBase {...props} EVariantSnackbar={EVariantSnackbar.SUCCESS}
                                       ref={ref as Ref<HTMLDivElement>}/>
            </>
        );
    },
);

export {SnackbarComponentSuccess}