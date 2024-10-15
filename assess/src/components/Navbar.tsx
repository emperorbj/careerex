import { Button } from "./ui/button"
import { MenuIcon } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    return (
        <div className="shadow-sm p-3 px-6 w-full flex items-center justify-between">
            <div className="flex items-center gap-2 justify-center">
                <img src="/logo.png" alt="" />
                <img src="/FarmSol.png" alt="" />
            </div>
            <div className="hidden lg:flex items-center gap-5 justify-center">
                <ul className="flex gap-8 items-center">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>

            </div>
            <div className="hidden lg:inline-block">
                <Button>Get started</Button>
            </div>
            <div className="inline-block md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <MenuIcon/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Home</DropdownMenuItem>
                    <DropdownMenuItem>About Us</DropdownMenuItem>
                    <DropdownMenuItem>Service</DropdownMenuItem>
                    <DropdownMenuItem>Contact Us</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>


        </div>
    )
}

export default Navbar
