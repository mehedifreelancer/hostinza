import TemplateCard from "./templateCard";

function BlankCard() {
    return ( 
        <>

          <div className="blankCard w-full  col-span-4 lg:col-span-3 rounded-xl bg-[#f6f6f6]  shadow-[0_30px_60px_rgba(0,0,0,.12)] min-h-[570px] px-5 py-5   border-2 border-[#eaeaea] ">
              <h2 className="mb-5 text-black font-semibold text-xl">Clone Template</h2>

               <div className="grid grid-cols-2 gap-x-5 gap-y-1 ">
                    <TemplateCard/>
                </div>   
            </div>
       
        </>
     );
}

export default BlankCard;