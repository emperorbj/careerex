

const Footer = () => {
    return (
        <footer className="flex flex-col 
        gap-4 md:gap-1 
        md:flex-row bg-green-600 
        p-4 md:p-8">
            <div>
                <div className="px-4 md:px-24">
                    <div className="flex items-center gap-1">
                        <img src="/logo.png" alt="logo" />
                        <h1 className="text-[#FEFEFE] text-[22px]">FarmSol</h1>
                    </div>
                    <p className="text-[18px]">
                    Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id 
                    quam venenatis. Orci eu lacus at donec. 
                    Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada 
                    </p>
                    <div className="flex gap-5 items-center">
                        <img src="/social1.png" alt="" />
                        <img src="/social2.png" alt="" />
                        <img src="/social3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col 
                gap-4 justify-start">
                    <h1 className="text-[#FEFEFE] text-[22px]">Explore</h1>
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Projects</li>
                        <li>Latest News</li>
                    </ul>
                </div>
                {/* others */}
                <div className="flex flex-col gap-4 justify-start">
                    <h1 className="text-[#FEFEFE] text-[22px]">Others</h1>
                    <ul className="flex flex-col gap-4">
                        <li>Testimonial</li>
                        <li>Benefits</li>
                        <li>Meet the farmers</li>
                    </ul>
                </div>
                {/* contact */}
                <div className="flex mt-4 md:mt-1 flex-col 
                gap-4 justify-start">
                    <h1 className="text-[#FEFEFE] text-[22px]">Contact</h1>
                    <div className="flex gap-3 items-center">
                        <img src="/call.png" alt="" />
                        <p>08053789452</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="/mail.png" alt="" />
                        <p>Farmsol@servicemail.com</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="/location.png" alt="" />
                        <p>Plot345 Trans Amadi industrial layout, Port Harcourt Rivers State</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
