import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setUser,setToken } from '../../utils/auth';
import Image from 'next/image'
import { useKeycloak } from "@react-keycloak/ssr";

const Redirect = () => {

    const router= useRouter()
    const { keycloak } = useKeycloak();

    useEffect(() => {
        if (keycloak) {
          keycloak.loadUserProfile().then(() => {
            setToken(keycloak?.token)
            setUser(keycloak?.profile)
            router.push('/dashboard')
          })
        }
      });
    return (
        <div className='center-out'>
            <Image src="/images/loading.gif" width="200" height="200" />
      </div>
    );
}

export default Redirect;
