import React from "react";
import DefaultButton from "./DefaultButton";
import useTranslation from "next-translate/useTranslation";



function Heading({headingText, subHeadingText}) {

    const { t } = useTranslation("common");
    return ( 

        <>
        <div className="heading_section pt-[60px] pb-[90px] grid grid-cols-7 container">
                <div className="headingWrapper col-span-7 md:col-span-4 lg:col-span-5">
                <h1 className="font-semibold text-xl  md:text-2xl lg:text-5xl">{t(headingText)}</h1>
                 <p className="mt-5 mb-5 text-sm test-slate ">{t(subHeadingText)}</p>
                </div>

                <div className="buttonWrapper col-span-7 md:col-span-3 lg:col-span-2">
                    <DefaultButton />
                </div>
            </div>
        </>
     );
}

export default Heading;