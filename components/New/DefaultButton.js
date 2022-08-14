function DefaultButton() {
    return ( 
        <>
            <a role={'button'} className="defaultButton  flex items-center justify-center gap-x-4  py-3 px-[15px]  border-[1px] border-[#eaeaea] peer"> 
            <svg  fill="none" height="20" shapeRendering="geometricPrecision" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" ><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>
            <span className="text-[#666] peer-hover:text-red"> Collaborate with a Team</span>
            </a>
        </>  
     );
}

export default DefaultButton;