import { Services } from '../../CardData'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'

const Service = () => {

    return (
        <section>
            <div className='flex flex-col py-10 items-center justify-center'>
                <h1 className='text-[46px]'>Our Services</h1>
                <h2 className='text-green-400 text-[28px]'>We have tailored solutions for every farm</h2>
            </div>
            <div className='grid grid-cols-1 
            md:grid-cols-3 gap-4 lg:grid-cols-4 px-6 md:px-2'>
                {Services.map((card,index)=>(
                <div key={index}>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <img className='object-cover w-full h-full' src={card.image} alt="card" />
                        </CardTitle>
                        <CardDescription className='text-green-500'>{card.title}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{card.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>
                            {card.buttonText}
                        </Button>
                    </CardFooter>
                </Card>
                </div>
                ))}
            </div>
        </section>
    )
}

export default Service
