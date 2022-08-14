import React from "react";
import Table from "../../../components/Dashboard/endpoints/Table";
import TopSection from "../../../components/Dashboard/endpoints/TopSecton";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import {parseContextCookie} from '../../../utils/parse-cookie'
import Seo from '../../../components/Common/Seo';


export const getServerSideProps= async (context) => {
  const cookies = parseContextCookie(context?.req?.headers?.cookie);
  if (!cookies?.kcToken) {
    return { redirect: { destination: "/", permanent: false } };
  }

  return {
      props: {
        cookies: parseContextCookie(context?.ctx?.req),
      },
    };
};

export default function index(){
    return(
        <>
          <Seo title="Hostinza - Endpoints" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
          <div className="min-h-[60vh]">
              <TopSection />
              <Table />
          </div>
        </>
    )
}
index.Layout =DashboardLayout;
