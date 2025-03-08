import '../../index.css'

import { ChevronDoubleRight, Award } from 'react-bootstrap-icons';

export default function Card({ image, title, description, link, award}){
    return(
        <>
            <img 
                src={image}
            />
            <div>
                <div className='flex flex-row items-center gap-1'>
                    <p className='font-noto font-semibold text-body text-xl py-2'>{title}</p>
                    {award ? (<Award color='rgba(206,91,22,1)' size={24}/>) : ''}
                </div>
                <p className='font-noto text-body font-light text-lg h-26'>{description}</p>
                {link && 
                    <a className="border-t border-secondary" href={link} target="_blank">
                        <div className='flex items-center justify-between py-3 border-t border-subcolor'>
                            <p className='leading-1 text-secondary'>Explore</p>
                            <ChevronDoubleRight color='rgba(189,192,189,1)'/>
                        </div>
                    </a>
                }
            </div>
        </>
    )
}