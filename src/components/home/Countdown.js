// import React from "react";
import React, { useState, useRef, useEffect } from 'react';
import {Container} from "react-bootstrap";


function Countdown(){
    const Ref = useRef(null);
     // The state for our timer
     const [timer, setTimer] = useState('00:00:00');
  
  
     const getTimeRemaining = (e) => {
         const total = Date.parse(e) - Date.parse(new Date());
         const seconds = Math.floor((total / 1000) % 60);
         const minutes = Math.floor((total / 1000 / 60) % 60);
         const hours = Math.floor((total / 1000 / 60 / 60) % 24);
         return {
             total, hours, minutes, seconds
         };
     }

     const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
  
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('0:02:00');
  
        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        // deadline.setSeconds(deadline.getSeconds() + 10);
        deadline.setMinutes(deadline.getMinutes() + 2);

        return deadline;
    }
  
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
  
    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
    return(
        <div className="countdown_content">
            <Container>
                <div className="pink_header_count">
                    <p>Not long left</p>
                </div>
                <img src="img/zigzag.png" className="zigzag" alt="line circle" />
                <img src="img/linec.png" className="linec" alt="line circle" />
                <img src="img/times.png" className="time" alt="line circle" />
                <h2 className="service_caption">Service will be updated in:</h2>
                <p className="count_para">The first and second parameters of the drop-shadow() function specifies the horizontal and 
                    vertical offset of the shadow respectively, <br/>whereas the third parameter operty, with one 
                    exception, the 'inset' keyword is not allowed.</p>
                <img src="img/square.png" className="square" alt="line circle" />
                <img src="img/semicircle.png" className="semi" alt="line circle" />
                <div className="countdown">
                    <p className="hour">{timer}</p>
                </div>
            </Container>
        </div>
    );
}

export default Countdown