function CreatedRepoCard({cardHeading, cardDetails}) {
    return ( 
        <>
            <div className="cardShape col-span-5 p-10 border border-[#ddd] bg-white shadow-[0_30px_60px_rgba(0,0,0,.12)]">
                <div className="cardHeading border-b-2 border-[#ddd] pb-3">
                    <h1 className="text-black font-semibold text-4xl">{cardHeading}</h1>
                </div>
 
                <div className="createDetails mt-4 max-w-[650px] w-full">
                    <p>
                       {cardDetails}
                    </p>
                </div>

                <div className="cardContent">
                    <div className="cardContent bg-[#f6f6f6] py-5 px-5 my-10 rounded-lg">
                    <div className="btnGroup flex gap-3">
                        <button  className="bg-black text-white rounded-md py-2 px-4 flex gap-x-2 hover:opacity-[.6]">
                        <svg fill="white"  height="20" viewBox="0 0 14 14" width="20"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="" fillRule="nonzero"></path></svg>
                        Github</button>

                        <button  className="bg-[#6b4fbb] text-white rounded-md py-2 px-4 flex gap-x-2 hover:opacity-[.6]">
                        <svg fill="white" height="20" viewBox="0 0 24 22" width="20"><path d="M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z" ></path><path d="M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z" ></path><path d="M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z" ></path><path d="M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z" ></path></svg>
                        GitLab</button>

                        <button  className="bg-[#0052cc] text-white rounded-md py-2 px-4 flex gap-x-2 hover:opacity-[.6]">
                        <svg fill="white" height="20" viewBox="-2 -2 65 59" width="20"><defs><linearGradient id="bitbucket-:r6:" x1="104.953%" x2="46.569%" y1="21.921%" y2="75.234%"><stop offset="7%" ></stop><stop offset="100%" 
                        ></stop></linearGradient></defs><path d="M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z" fill="url(#bitbucket-:r6:)" fillRule="nonzero" transform="translate(-.026 .82)"></path><path d="M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z" fill="currentColor" fillRule="nonzero"></path></svg>
                        BitBucket</button>
                    </div>

                    <div className="manage mt-3">
                        <p>Manage Login Connections  </p>
                    </div>
            </div>
                </div>
            </div>
        </>
     );
}

export default CreatedRepoCard;