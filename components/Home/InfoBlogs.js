import React from 'react';
import Image from 'next/image';
import useTranslation from "next-translate/useTranslation";
import { useBlogsQuery } from '../../data/blogs';
import moment from 'moment';
import Link from 'next/link';

export default function InfoBlogs() {

  const { t } = useTranslation("common");
  const { data:dataList }  = useBlogsQuery()
  return (
    <div className='bg-white w-full h-auto py-24'>
        <div className='container w-full items-center mx-auto'>
            <div className='flex flex-col w-full align-middle'>
                <p className='text-gray-500 text-lg font-normal text-center font-poppins'>{t("Latest Info")}</p>
                <h3 className='text-blue-content text-2xl md:text-4xl font-bold text-center font-poppins'>
                    <span className='text-black'>{t("GET")}</span> {t("LATEST INFO")}
                </h3>
                <div className='flex flex-wrap w-full align-middle justify-center gap-10 mt-10 md:mt-20'>
                    {
                        dataList?.map((item,i)=>{
                            
                            return i<3?(
                                    <a without rel="noreferrer" target={'_blank'} href={item?.url} key={i} className='flex-1 basis-[280px] cursor-pointer'>
                                        <div className='w-full h-56 relative'>
                                            {
                                                item?.feature_image&&(
                                                    <Image src={item?.feature_image} layout='fill' alt='blogImage'/> 
                                                )
                                            }
                                        </div>
                                        <div className='w-[85%] mx-auto -mt-8 bg-white px-[25px] py-10 relative shadow-blog-card-content'>
                                            <div className='w-1 h-6 absolute bg-light-blue top-10 left-0'></div>
                                            <p className='text-base text-gray-400'>
                                                {t("Shared Hosting")}
                                            </p>
                                            <h3 className='text-2xl text-black font-bold my-3'>
                                                {item?.title}
                                            </h3>
                                            <p className='text-blue-content text-sm'>
                                                {moment(item?.published_at).format('MMM DD, yyyy')}
                                            </p>
                                        </div>
                                    </a>
                            ):''
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
