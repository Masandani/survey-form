/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react'

const CountdownTimer = () => {
    const intervalRef = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor(total / (1000 * 60 * 60) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total, days, hours, minutes, seconds
        };
    }
    const startTimer = (deadline) => {
        let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline)
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            clearInterval(intervalRef.current);
        }
    }
    const clearTimer = (endtime) => {
        setTimer('00:00:10');
        if (intervalRef.current) clearInterval(intervalRef.current);
        const id = setInterval(() => {
            startTimer(endtime);
        }, 1000)
        intervalRef.current = id;
    }
    const getDeadlineTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 50);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadlineTime());
        return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    }, []);
    const onClickResetBtn = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        clearTimer(getDeadlineTime());
    }
    return  {timer,startTimer}   
            
            
    


}

export default CountdownTimer;
