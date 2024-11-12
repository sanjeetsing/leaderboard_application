// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #4f46e5; /* A nice blue shade */
  color: white;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.8em;
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Competition Leaderboard</Title>
    </HeaderContainer>
  );
};

export default Header;
