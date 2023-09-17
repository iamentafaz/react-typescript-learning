import React, { useEffect, useRef, useState } from 'react'

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null);
    const clearTimer = () => {
        if(interValRef.current) window.clearInterval(interValRef.current);
    }

    useEffect(() => {
        interValRef.current = window.setInterval(()=> {
            setTimer(timer => timer + 1)
        }, 1000);
        return () => {

        }
    },[]);
  return (
    <div>
        Ref timer - {timer}
        <button onClick={() => clearTimer()}></button>
    </div>
  )
}
