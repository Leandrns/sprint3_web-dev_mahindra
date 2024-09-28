import './style.css'
import React, {useState, useEffect} from 'react'
export const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState('');

    const calculaTempo = () => {
        const targetDate = new Date('2024-12-07T13:59:59');
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff > 0){
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            return `${days}d ${hours}h ${minutes}min ${seconds}s`
        }else{
            return 'Mercado Fechado!'
        }
    }
    useEffect(() => {
        const atualiza = setInterval(() => {
            setTimeRemaining(calculaTempo())
        },1000)

        return () => clearInterval(atualiza)
    },[]);
    return <p className='timer'>{timeRemaining}</p>
}