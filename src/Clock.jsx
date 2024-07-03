import { useState } from "react";

const Clock = () => {
    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime ] = useState(currentTime);  //initial state of time is the current time.

    const update = () => {
    const currentTime = new Date().toLocaleTimeString();
       setTime(currentTime);        
    }
    setInterval(()=>{
        update()
    },1000);   //updates every second to keep track of time.

    return(
        <>
        <div class="hero">
        <h1 className="h1">Digital Clock</h1>
        <div className="main">
        <div class="container">
            <div class="clock"> 
                <h1>{time}</h1>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}

export default Clock