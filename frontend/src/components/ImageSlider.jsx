import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SliderContainer = styled.div`
  position: relative;
  max-width: 65%;
  overflow: hidden;
  margin: 0 24px 0 auto;
  border-radius: 16px;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const SliderImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  flex-shrink: 0;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 20%;
  padding: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    color: #fafafa;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SliderContainer>
      <SliderWrapper
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <SliderImage key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </SliderWrapper>
      <ArrowButton className="left" onClick={handlePrevious}>
        <ArrowBackIcon />
      </ArrowButton>
      <ArrowButton className="right" onClick={handleNext}>
        <ArrowForwardIcon />
      </ArrowButton>
    </SliderContainer>
  );
}

export default ImageSlider;
