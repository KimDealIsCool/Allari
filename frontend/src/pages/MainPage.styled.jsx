import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  display: grid;
  width: 30%;
  max-height: 65vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px; /* Width of the entire scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #3333, #dadada);
    border-radius: 5px;
  }
`;

export const ContentLeft = styled.div`
  flex: 1;
`;

export const ContentRight = styled.div`
  flex: 1;
  margin-left: 16px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  margin: 24px auto !important;
`;

export const AnimalList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AnimalItem = styled.li`
  background-color: #f0f0f0;
  padding: 8px 24px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin: 12px auto;

  &:hover {
    background-color: #dddd;
  }
`;

export const AnimalName = styled.span`
  font-size: 18px;
  color: #333;
`;

export const ProjectDescription = styled.div`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  padding: 8px;
`;
