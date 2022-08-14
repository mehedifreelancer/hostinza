import dynamic from 'next/dynamic'
import React from "react";
import Layout from "../components/Layout";
import FeaturesWeOffer from "../components/Home/FeaturesWeOffer";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeSlider from "../components/Home/HomeSlider";
import InfoBlogs from "../components/Home/InfoBlogs";
import PricingPlans from "../components/Home/PricingPlans";
// import SelectPlan from "../components/Home/SelectPlan";
import WhyChooseUs from "../components/Home/WhyChooseUs";
// import ServicesWeOffer from "../components/Home/ServicesWeOffer";
// import OurCustomer from "../components/Home/OurCustomer";
// import ExploreLocations from "../components/Home/ExploreLocations";
import AccelerateYourApp from "../components/Home/AccelerateYourApp";
import Seo from "../components/Common/Seo";
const HostinzaNetwork = dynamic(()=>import("../components/Home/HostinzaNetwork"))
const SearchDomain = dynamic(()=>import("../components/Home/SearchDomain"))
import { getBlogs,getBlogsKey } from '../data/blogs';
import { getPlans,getPlansKey } from '../data/plans';

import { SWRConfig } from 'swr';


export const getStaticProps= async ()=>{
  const blogs = await getBlogs()
  const plans = await getPlans()
  return {
    props: {
      fallback: {
        [getBlogsKey]: blogs,
        [getPlansKey]: plans

      }
    }
  }
}

export default function Home({fallback}) {
  return (
    <SWRConfig value={{ fallback }}>
      <Seo title="Hostinza - Home" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
      <HomeHeroSection />
      <SearchDomain />
      <WhyChooseUs />
      <PricingPlans />
      {/* <SelectPlan/> */}
      <FeaturesWeOffer />
      <HostinzaNetwork />
      <HomeSlider />
      <InfoBlogs/>
      {/* <ServicesWeOffer/> */}
      {/* <OurCustomer/> */}
      {/* <ExploreLocations/> */}
      <AccelerateYourApp/>
    </SWRConfig>
  );
}
Home.Layout =Layout;
