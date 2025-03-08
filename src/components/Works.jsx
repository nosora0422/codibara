import '../index.css'

import CardCarousel from './UI/Carousel'

export default function Works(){
    return(
        <div className='flex flex-col items-center py-20' id='works'>
            <div className='max-w-[1440px] flex flex-col md:flex-row md:justify-between w-full px-2'>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] leading-none tracking-tight'>What</div>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] leading-none tracking-tight text-right -my-10 md:my-0'>We</div>
                <div className='font-chivo text-subcolor text-[36vw] md:text-[16vw] leading-none tracking-tight'>Did</div>
            </div>
            <div className='flex flex-col w-full px-4'>
                <CardCarousel />
            </div>
        </div>
    )
}