import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  padding: 16px;
`;

function App() {
  return (
    <PageContainer>
      <Header />
      <NavBar />
      <ContentContainer>
        <MainPage />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
