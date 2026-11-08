import { useState, useRef, useEffect } from "react";
const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timeInterval = useRef(null);
    const [messages, setMessages] = useState([]);
    const chatBottomRef = useRef(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await fetch('https://dummyjson.com/comments');
                if(!res.ok) {
                    throw new Error('Fetch error');
                }
                const data = await res.json();
                console.log
                setMessages(data.comments)
            } catch(err) {
                console.log('error: ', err.message)
            }
        }
        fetchData();
    }, []);


    const startTimer = () => {
        if(timeInterval.current) return;
        timeInterval.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timeInterval.current);
        timeInterval.current = null;
    }

    const scrollDown = () => {
        chatBottomRef.current.scrollIntoView({'behavior': 'smooth'});
    }


    return (
        <>
            <h2>Timer {seconds}</h2>

            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
            </div>

            <div><button onClick={scrollDown}>Scroll down</button></div>

            <ul style={{
                width: "300px",
                height: "200px",
                padding: "15px",
                overflowY: "scroll"
            }}>
                {
                    messages.map(message => (
                    <li 
                        key={message.id}>
                            {message.body} <strong>{message.user.fullName}</strong>
                    </li>))
                }
                <div ref={chatBottomRef}></div>
            </ul>
        </>
    )
}

export default Timer;