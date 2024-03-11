import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'
import {useState, useEffect} from 'react'
const Clock = () => {
  const [date, setDate]=useState(new Date())
  useEffect(()=>{
    const timerId=setInterval(()=>{
      setDate(new Date())
    },1000)
    console.log("Effect is executed and interval is scheduled")
    return ()=>{
      clearInterval(timerId);
      console.log("Clean up function is called")
    }
  },[])
  return (
  <ClockContainer>
    <Heading>Clock</Heading>
    <ClockImage
      src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
      alt="clock"
    />
    <Time> {date.toLocaleTimeString()} </Time>
  </ClockContainer>
)}

export default Clock
