import { Testimonials } from '../../CardData'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Testimonies = () => {
    return (
        <section className='mt-6 p-8 bg-green-600'>
            <div className='flex items-center justify-center'>
                <h1 className='py-14 text-[46px] text-white'>What Our Clients Are Saying</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {Testimonials.map((testimony, index) => (
                    <div key={index}>
                        <Card className='border-4 border-green-400 bg-gradient-to-br from-green-400 to-green-600'>
                            <CardHeader>
                                <CardTitle className='flex flex-col items-center justify-center p-8'>
                                    <div>
                                        <img src="/comma.png" alt="comma" />
                                        <p>{testimony.text}</p>
                                    </div>
                                </CardTitle>
                                <CardDescription className='flex items-center justify-center'>
                                    <Avatar>
                                        <AvatarImage src={testimony.avatar} />
                                    <AvatarFallback>img</AvatarFallback>
                                    </Avatar>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex items-center justify-center'>
                                {testimony.fullName}
                            </CardContent>
                            <CardFooter className='flex items-center justify-center'>
                                {testimony.title}
                            </CardFooter>
                        </Card>
                    </div>
                ))

                }
            </div>
        </section>
    )
}

export default Testimonies
