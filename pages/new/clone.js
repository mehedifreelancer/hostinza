import Heading from "../../components/New/Heading";
import CommonHeroSection from "../../components/common/CommonHeroSection";

import Layout from '../../components/Layout';
import CreateRepoCard from "../../components/CloneProject/CreateRepoCard";
import LeftOptions from "../../components/CloneProject/LeftOptions";

function clone() {

    const subHeading = "Time to Clone Project";
    const mainHeading = "Lets Clone  Project ";
    const details =  "Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione.";
    return ( 
    <>
        
        <CommonHeroSection subHeadingText={subHeading}  mainHeadingText={mainHeading} detailsText ={details} />
        <div className="clonePage">
            <Heading headingText = "You are almost done " subHeadingText = "Please follow the steps to configure your Project and deploy it." />

            <div className='bottomWrapper bg-[#f6f6f6] py-[60px] border-t-2 border-[#ddd] mt-40'>

                 <div className="grid grid-cols-7 container gap-8">
                 <LeftOptions/>
                 <CreateRepoCard  cardHeading = "Create Git Repository" cardDetails="To ensure you can easily update your project after deploying it, a Git repository must be created. Every push to that Git repository will be deployed automatically." ></CreateRepoCard>
                 </div>

            </div>
        </div>
    </> );
}

export default clone;

clone.Layout =Layout;