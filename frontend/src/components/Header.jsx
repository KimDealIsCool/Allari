import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    background-color: #333
  }
  50% {
    background-color: #4D4D4D
  }
`;

const TimerContainer = styled.div`
  font-size: 32px;
  padding: 10px 0px;
  text-align: center;
  background-color: #333;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 184px;
  margin: 16px auto;
  animation: ${pulse} 7s ease-in-out infinite;
`;

function Header() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <TimerContainer>
      <div>{time}</div>
    </TimerContainer>
  );
}

export default Header;
