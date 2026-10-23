import {useState, useEffect} from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

       const timeInterval = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000);

        return () => clearInterval(timeInterval);

    }, [isRunning]);

    const toggleIsRunning = () => {
        setIsRunning(!isRunning);
    }

    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
    }

    const circleStyles = {
        width: '10px',
        height: '10px',
        display: 'inline-block',
        borderRadius: '10px',
        background: isRunning ? '#65f489' : '#cccccc',
        marginRight: '5px'
    }

    const buttonsStyles = {
        margin: "10px 0 0 0 ",
        display: "flex",
        justifyContent: "center",
        gap: "10px"
    }

    const btnStyles = {
        border: '1px solid #cccccc',
        background: '#ffffff',
        borderRadius: '15px',
        minWidth: '140px',
        textAlign: 'center',
        padding: '5px 10px',
        cursor: 'pointer'
    }


    return (
        <section>
            <h2>ELAPSED TIME</h2>
            <div><strong>{time}</strong></div>
            <div>
                <span style={circleStyles}></span>
                {isRunning ? 'Running' : 'Stopped'}
            </div>
            <div className='buttons' style={buttonsStyles}>
                <button
                    type="button" 
                    className='btn'
                    onClick={toggleIsRunning}
                    disabled={isRunning}
                    style={btnStyles}
                >Start</button>
                <button 
                    type="button" 
                    className='btn'
                    onClick={toggleIsRunning}
                    style={btnStyles}
                    disabled={!isRunning}
                >Stop</button>
                <button 
                    type="button" 
                    className='btn'
                    style={btnStyles}
                    onClick={resetTimer}
                >Reset</button>
            </div>
        </section>
    )
}


export default Timer;