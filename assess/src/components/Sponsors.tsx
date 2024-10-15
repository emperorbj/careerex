import {SponsorLogo} from '../../CardData'

const Sponsors = () => {
    return (
        <div className='flex'>
            {SponsorLogo.map((logo,index)=>(
                <div className="h-[20px] 
                md:h-[200px] -my-20
                w-full flex items-center md:my-6
                gap-4 md:gap-6"  key={index}>
                        <img src={logo.image} alt="" />
                </div>
            ))}
        </div>
        //  className="h-[20px] 
        // md:h-[200px] -my-20
        // w-full flex items-center md:my-6
        // gap-4 md:gap-6
    )
}

export default Sponsors
