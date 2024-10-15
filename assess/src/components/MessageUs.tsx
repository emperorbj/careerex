import { Textarea } from "@/components/ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"


const MessageUs = () => {
    return (
        <section className="h-[1100px] md:h-[700px] mt-10 p-8 px-14 flex 
        flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-[50%]">
                <img src="/farmer.png" alt="" />
            </div>
            <div className="w-full md:w-[50%]">
                <form className="px-4 md:px-8 flex 
                flex-col rounded-md 
                gap-4 bg-[#D9ECDA] w-[450px] h-[500px] md:h-[638px] 
                md:w-[600px]">
                    <div className="mt-8 md:mt-16">
                        <h2 className="text-[32px] text-green-500">Have Questions?</h2>
                        <h2 className="text-[32px] font-bold">Send us a message</h2>
                    </div>
                    <div>
                        <Input className="bg-[#F4F4F4] py-6" type="text" placeholder="Name"/>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        <Input className="bg-[#F4F4F4] py-4 md:py-6" type="email" placeholder="Email"/>
                        <Input className="bg-[#F4F4F4] py-4 md:py-6" type="number" placeholder="phone number"/>
                    </div>
                    <div>
                        <Textarea  className="bg-[#F4F4F4] h-[120px] md:h-[232px]" placeholder="Enter message"/>
                    </div>
                    <Button className="bg-[#163518] py-4 md:py-6">
                        Send Message

                    </Button>
                </form>
            </div>
        </section>
    )
}

export default MessageUs
