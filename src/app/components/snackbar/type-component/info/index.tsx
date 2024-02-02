import React, {LegacyRef, Ref} from "react";
import {EVariantSnackbar, ISnackbarComponentProps, SnackbarComponentBase} from "../..";


const SnackbarComponentInfo = React.forwardRef(
    (props: ISnackbarComponentProps, ref: LegacyRef<HTMLDivElement>) => {
        return (
            <>
                <SnackbarComponentBase {...props} EVariantSnackbar={EVariantSnackbar.INFO}
                                       ref={ref as Ref<HTMLDivElement>}/>
            </>
        );
    },
);

export {SnackbarComponentInfo}