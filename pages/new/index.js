import React from 'react';
import FormCard from "../../components/New/FormCard";
import BlankCard from "../../components/New/BlankCard";
import Heading from "../../components/New/Heading";
import CommonHeroSection from "../../components/common/CommonHeroSection";

import Layout from '../../components/Layout';





function index() {

    const subHeading = "Want to create something new?";
    const mainHeading = "Lets Build  Project ";
    const details =  "Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione.";
    return ( 
    <>
        
        <CommonHeroSection subHeadingText={subHeading}  mainHeadingText={mainHeading} detailsText ={details} />
        <div className="newPage  ">
            <Heading headingText={"Let's build something new."} subHeadingText="To deploy a new Project, import an existing Git Repository or get started with one of our Templates."/>
            
            <div className='bottomWrapper bg-[#f6f6f6] py-[60px] border-t-2 border-[#ddd] mt-40'>
                <div className="grid md:grid-cols-1 lg:grid-cols-7  gap-10 container mt-[-220px]">
                    <FormCard  />
                    <BlankCard  />
                </div>
            </div>
        </div>
    </> );
}

export default index;

index.Layout =Layout;