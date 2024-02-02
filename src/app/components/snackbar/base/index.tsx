import React, {LegacyRef} from "react";
import {handleVariantSnackbarIcon, handleVariantSnackbarLine, ISnackbarComponentProps} from "..";
import {closeSnackbar} from "notistack";


const SnackbarComponentBase = React.forwardRef(
    (props: ISnackbarComponentProps, ref: LegacyRef<HTMLDivElement>) => {


        return (
            <div
                className="bg-white rounded  px-4 py-3 shadow-md"
                ref={ref}>
                <div className="flex min-w-[350px]">
                    <div className={`p-3 ${handleVariantSnackbarLine(props.EVariantSnackbar)} border-l-4`}>
                        {handleVariantSnackbarIcon(props.EVariantSnackbar)}
                    </div>
                    <div className='mt-3'>
                        <p className="font-bold">{props.message}</p>
                    </div>
                    <button type='button' onClick={() => closeSnackbar(props.action())} className='p-3 ml-auto'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                fill="#A3B4D1"/>
                        </svg>
                    </button>
                </div>
            </div>
        );
    },
);

export {SnackbarComponentBase}