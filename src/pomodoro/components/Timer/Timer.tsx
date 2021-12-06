import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap";
import {useEffect, useState} from "react";
import './Timer.css';

export const Timer = () => {
    const [timeValue,setTimeValue] = useState(1500);
    const [time,setTime] = useState(timeValue);
    const [isStarted,setIsStarted] = useState(false);

    useEffect(() => {
        const timer = time > 0 && isStarted && setInterval(() => setTime(time-1),1000);
        return () => clearInterval(timer as NodeJS.Timeout);
    }, [time, isStarted]);

    useEffect(() => {
        resetTimer();
    },[timeValue])

    const startTimer = () => {
        setIsStarted(true);
    }

    const stopTimer = () => {
        setIsStarted(false);
    }

    const resetTimer = () => {
        setIsStarted(false);
        setTime(timeValue);
    }

    const changeTimeValue = (value : number) => {
        setTimeValue(value);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Pomodoro v2.0</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container">
                <div className="center-element">
                    <ButtonGroup>
                        <Button variant="secondary" onClick={() => changeTimeValue(1500)}>Pomodorro</Button>
                        <Button variant="secondary" onClick={() => changeTimeValue(300)}>Short Break</Button>
                        <Button variant="secondary" onClick={() => changeTimeValue(900)}>Long Break</Button>
                    </ButtonGroup>
                    <div className="clock">
                        {Math.floor(time / 60) + ":" + (time % 60 < 10 ? '0' + time % 60 : time % 60 ? time % 60 : '00')}
                    </div>
                    <div className="timer-buttons">
                        <Button variant="dark" onClick={startTimer}>Start</Button>
                        <Button variant="dark" onClick={stopTimer}>Pause</Button>
                        <Button variant="dark" onClick={resetTimer}>Reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}