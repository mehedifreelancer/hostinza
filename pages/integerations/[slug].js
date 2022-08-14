import React from 'react';
import { useRouter } from 'next/router';
import SlugTopSection from '../../components/Integerations/SlugTopSection';
import ImagesContainer from '../../components/Integerations/ImagesContainer';
import DetailsContainer from '../../components/Integerations/DetailsContainer';
import GetStartedBox from '../../components/Integerations/GetStartedBox';
import Layout from '../../components/Layout';
import { getBlog } from '../../data/blogs';
import { getBlogs ,getBlogKey } from '../../data/blogs';
import { SWRConfig } from 'swr';

export async function getStaticPaths() {

    const posts = await getBlogs()
  
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }))
  
    return { paths, fallback: false }
}

export const getStaticProps= async ({ params })=>{
    
    const blog = await getBlog(params?.slug)
    const key=getBlogKey(params?.slug)
    return {
      props: {
        fallback: {
          [key]: blog
        }
      }
    }

}



export default function Index({fallback}) {

    const router = useRouter();
    return (
        <SWRConfig value={{ fallback }}>
            <Layout>
                    <div className="minH-[100vh] bg-[#FAFAFA]">
                        <SlugTopSection slug={router?.query?.slug}/>
                        <div className='xs:overflow-x-auto sm:overflow-x-auto md:w-[95%] max-w-[1220px] mx-auto mt-12'>
                            <ImagesContainer slug={router?.query?.slug}/>
                            <DetailsContainer slug={router?.query?.slug}/>
                            <GetStartedBox slug={router?.query?.slug}/>
                        </div>
                    </div>
            </Layout>
        </SWRConfig>
    )
}