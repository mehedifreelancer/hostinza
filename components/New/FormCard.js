import React, { Component } from 'react';
function FormCard() {
    return ( 
        <>
          <div className=" w-full rounded-xl bg-white  shadow-[0_30px_60px_rgba(0,0,0,.12)] min-h-[570px] px-5 py-10 flex flex-col justify-between col-span-4">
           <div className='top_form'>
           <div className="mb-4 grid grid-cols-2 gap-4">
              <div className='col-span-2 md:col-span-1'>

              <div className='w-full border border-slate-200 relative rounded-lg '>
                <select className=' w-full px-2 min-h-[40px] pl-8'>
                  <option >Import project </option>
                  <option>Clone project</option>
                  <option>Sample project</option>
                </select>

                <svg className="test absolute right-5 top-[10px]"   fill="none" height="18"  stroke="#d4d4d4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" style={{color: "#d4d4d4"}}><path d="M6 9l6 6 6-6"></path></svg>
              </div>
              </div>
              <div className="mb-4 flex flex-col col-span-2 md:col-span-1">
              <div className="relative">
              <svg className='absolute left-2 top-2'  fill="none" height="20"  stroke="#d4d4d4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" style={{color:"#d4d4d4"}}><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
                <input placeholder='Search' type="email" id="text" className="w-full rounded-lg border border-slate-200 px-2 min-h-[40px] pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
              </div>
            </div>
            </div>

            <div className='border rounded-lg py-3 px-5 flex justify-between'>
                <div className='flex justify-center items-center gap-x-5'>
                <img className='rounded-full h-8 w-8' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'></img>
                <p>This is for testing import </p>

                </div>

                <div className='flex  gap-x-3 items-center'>

                  <a href='#' className='bg-[#3291ff] px-4 py-1 rounded text-white'>Import</a>
                </div>

            </div>

            <div className='mt-4'> <p>Missing Git repository?</p></div>

           </div>

           <div className='bottom_form'>
            <hr className='mb-5'></hr>
            <a role={'button'} >Import Third-Party Git Repository →</a>
           </div>

          </div>
        </>
     );
}

export default FormCard;