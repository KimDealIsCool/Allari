import React from 'react';
import ImageSlider from '../components/ImageSlider';
import useAnimalData from '../hooks/useAnimalData'; // Import the custom hook
import MousePositionIndicator from '../components/MousePositionIndicator';
import {
  ProjectDescription,
  Container,
  ContentLeft,
  ContentRight,
  Main,
  StyledButton,
  AnimalList,
  AnimalName,
  AnimalItem,
} from './MainPage.styled';

const images = [
  'https://tinyurl.com/2rxpu639',
  'https://tinyurl.com/mf6vsscc',
  'https://tinyurl.com/4rmvvb69',
  'https://tinyurl.com/5ah26335',
  'https://tinyurl.com/bdfvx5ah',
];

function MainContent() {
  const projectDescription = (
    <ProjectDescription>
      &bull; In the backend part of this project, I employed dependency
      injection within the AnimalsController. Here, I applied constructor
      injection to inject the animalService. To facilitate testing, my
      AnimalService employed a static mock list. For the frontend, I built the
      user interface using Create-React-App template relying on Material UI for
      the base component, styled-components as CSS framework. As a goal for the
      task, I've looked at using SOLID principles with separated custom hooks
      for the fetch data logic, a service for managing HTTP request, and error
      handling.
    </ProjectDescription>
  );
  const { animals, error, fetchAnimals } = useAnimalData();

  return (
    <Container>
      <ContentLeft>
        <MousePositionIndicator />
      </ContentLeft>
      <Main>
        <p>{projectDescription}</p>
        <StyledButton variant="contained" onClick={fetchAnimals}>
          Fetch
        </StyledButton>
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <AnimalList>
            {animals.map((animal) => (
              <AnimalItem key={animal.id}>
                <AnimalName> {animal.name}</AnimalName>
              </AnimalItem>
            ))}
          </AnimalList>
        )}
      </Main>
      <ContentRight>
        <ImageSlider images={images} />
      </ContentRight>
    </Container>
  );
}

export default MainContent;
