export interface CardData {
    title: string,
    description: string,
    buttonText: string,
    image:string
}

export interface TestimonyCard {
    text: string,
    avatar: string,
    fullName: string,
    title:string
}

export interface SponsorCard {
    image: string
}

export const Services:CardData[] = [
    {
        image:'/service1.png',
        title:'Precision Agriculture',
        description:'Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada',
        buttonText:'Read more'
    },
    {
        image:'/service2.png',
        title:'Organic Farming Input',
        description:'Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada',
        buttonText:'Read more'
    },
    {
        image:'/service4.png',
        title:'Smart Irrigation System',
        description:'Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada',
        buttonText:'Read more'
    },
    {
        image:'/serv4.png',
        title:'Crop Management',
        description:'Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada',
        buttonText:'Read more'
    },
]

export const Testimonials:TestimonyCard[] = [
    {
        text:'Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.',
        avatar:'/avatar1.png',
        fullName:'JOHN SMITH',
        title:'Founder of Awesomeux Technology'
    },
    {
        text:'Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.',
        avatar:'/avatar2.png',
        fullName:'ALVIN GAP',
        title:'Team Lead QEP AgroTech'
    },
    {
        text:'Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.',
        avatar:'/avatar3.png',
        fullName:'ROLAND GRIFFIN',
        title:'Founder AgroNig Robotics'
    }
]

export const SponsorLogo:SponsorCard[] = [
    {
        image:'/sponsor1.png'
    },
    {
        image:'/sponsor2.png'
    },
    {
        image:'/sponsor3.png'
    },
    {
        image:'/sponsor4.png'
    },
    {
        image:'/sponsor5.png'
    },
]