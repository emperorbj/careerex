import { Button } from "./ui/button"


const AboutUs = () => {
    return (
        <section className="p-0 md:p-8  
        px-5 md:px-10 gap-[40px] md:gap-4 
        flex flex-col-reverse 
        md:flex-row h-[980px] md:h-[650px]">

            <div className="flex flex-col gap-4 
            items-center justify-center w-full 
            md:w-[40%]">
                <h1 className="text-[32px]">About Us</h1>
                <h2 className="text-[20px] text-green-500">"Our Commitment to agriculture"</h2>
                <p className="text-[18px] md:text-[20px]">Lorem ipsum dolor sit amet consectetur. Arcu id
                    maecenas adipiscing 
                    tempus tempor id quam venenatis. 
                    Orci eu lacus at donec. Mi volutpat augue vivamus lorem 
                    justo scelerisque in. Malesuada gravida urna pellentesque turpis magna. 
                    Semper neque eu velit aliquam in augue ullamcorper nisl. Et dolor urna sollicitudin praesent metus facilisis. Dui tellus habitasse mi aliquet consequat eget. Interdum semper fames consequat nisl varius fermentum elit. In et suscipit ullamcorper augue ac nullam porttitor elit amet. Orci cras malesuada ac sit hendrerit tellus fringilla risus. Turpis ultricies libero lobortis in viverra. Arcu imperdiet sapien mauris posuere. Suspendisse molestie senectus tincidunt laoreet tellus et velit faucibus dictum. 
                    Lectus nunc proin rhoncus elit non.</p>
                    <Button className="w-full">Learn more</Button>
            </div>
            <div className="relative h-full p-2 w-full 
            md:w-[60%]">
                <div className="absolute z-10 top-44 md:left-16 
                md:top-48 w-[271px] md:w-[411px] h-[270px] md:h-[400px]">
                    <img className="object-cover" src="/tractor.png" alt="" />
                </div>
                <div className="absolute w-[271px] 
                md:w-[411px] 
                right-0 top-6 md:top-0 h-[270px] md:h-[400px]">
                    <img className="object-cover" src="/garden.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs
