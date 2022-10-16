import { useRef, useState, useEffect } from "react"
import './style.css'

function Timer() {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef()

    function startTimer(){
        const countdownDate = new Date('Nov 25, 2022 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer()
    })

  return (
    <div className="timer-container">
        <h2>Days to Black Friday</h2>
        <div className='timer'>
            <div>
                <h3>Days</h3>
                <p>{timerDays}</p>
            </div>
            <div>
                <h3>Hours</h3>
                <p>{timerHours}</p>
            </div>
            <div>
                <h3>Minutes</h3>
                <p>{timerMinutes}</p>
            </div>
            <div>
                <h3>Seconds</h3>
                <p>{timerSeconds}</p>
            </div>    
        </div>
        
    </div>
    
  )
}

export default Timer