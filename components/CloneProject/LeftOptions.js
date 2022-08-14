function LeftOptions() {
    return ( 

        <>
        <div className="col-span-2">
           <div className="sagment border-b-2 border-[#ddd] pb-3 mb-5">
            <ul>
                <li className="mb-4 text-gray ">Create Git Repository</li>
                <li className="mb-4 text-gray">Deploy</li>
            </ul>
           </div>


           <div className="sagment border-b-2 border-[#ddd] pb-3 mb-5">
            <ul>
                <li className="mb-4 text-gray "><h3 className="font-semibold"> Git Repository</h3></li>
            </ul>
           </div>


           <div className="sagment border-b-2 border-[#ddd] pb-3 mb-5">
            <ul>
                <li className="mb-4 text-gray "> <a href="#">Import a Git Repository</a></li>
                <li className="mb-4 text-gray"><a href="#">Browse Templates</a></li>
            </ul>
           </div>
        </div>
        </>
     );
}

export default LeftOptions;