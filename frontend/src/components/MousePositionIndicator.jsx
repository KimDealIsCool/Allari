import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  background-color: #f0f0f0;
  padding: 8px 12px 8px 40px;
  border-radius: 14px;
  margin: auto;
  width: 30%;
  text-align: left;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(240, 240, 240, 0.8);
    color: #317773;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

function MousePositionIndicator() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <IndicatorContainer>
      <p>Mouse Position:</p>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </IndicatorContainer>
  );
}

export default MousePositionIndicator;
