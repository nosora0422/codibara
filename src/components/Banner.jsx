import '../index.css'
import logo from '/assets/codibara-sample-logo.png';

import { ChevronDoubleDown } from 'react-bootstrap-icons';


export default function Banner(){
    return(
        <>
         <div className='relative h-svh flex flex-col justify-center items-center'>
            <img
                src={logo}
            />
            <div className='absolute bottom-6 flex flex-col items-center'>
                <p className='font-chivo text-subcolor inline-block mb-4.5 border-b'>Explore</p>
                <a href='#about'>
                    <ChevronDoubleDown color='rgba(206,91,22,1)' size={24}/>
                </a>
            </div>
         </div>
        
        </>
    )
}