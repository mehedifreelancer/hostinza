function TemplateCard() {

    const cardData = [

        {   id : 1,
            techName : "React.js",
            imageSrc : "images/1.webp"
        },

        {   id:2,
            techName : "Next.js",
            imageSrc : "images/2.webp"
        },

        {   id : 3,
            techName : "Demo.js",
            imageSrc : "images/3.jpg"
        },

        {   id:4,
            techName : "Angular.js",
            imageSrc : "images/4.jpeg"
        }

    ]

    return ( 



        <>


            {
                cardData.map((item) =>
                <div key={item.id} className="col-span-2 sm:col-span-1">
                    <div  role={'button'} className="templateCard shadow-lg  rounded-lg w-full mb-10 ]">

                    <div className="cardImageWrapper">
                        <img className="h-[150px] w-full object-cover" src={item.imageSrc}/>
                    </div>                
                    <div className="cardInfo flex  gap-4 items-center min-h-[40px] py-4 px-2">
                        <img className='rounded-full h- w-8' src='images/cpu-9.png'/>
                        <p className="projectInfo">{item.techName}</p>
                    </div>
                    </div>
                    </div>
                )
            }
        </>
     );
}

export default TemplateCard;