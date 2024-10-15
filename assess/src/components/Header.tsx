import Navbar from "./Navbar"


const Header = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="w-full h-[350px] md:h-[600px]">
                <img className="object-cover w-full h-full" src="/header.png" alt=""/>
            </div>
        </div>
    )
}

export default Header
