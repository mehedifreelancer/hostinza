import React, { useState, useEffect, useContext } from "react";
import Footer from "../Footer";
// import { useKeycloak } from "@react-keycloak/ssr";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHeader from "./DashboardHeader";
export default function DashboardLayout({ children }) {

  // const { keycloak } = useKeycloak();
  // useEffect(() => {
  //   if (keycloak) {

  //     keycloak.loadUserProfile().then(() => {
  //     })
  //   }
  // });

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <DashboardHeader />
        {children}
        <ToastContainer/>
        <Footer />
      </div>
    </>
  );
}
