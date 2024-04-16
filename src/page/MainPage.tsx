import { ReactNode } from 'react';
import styled from 'styled-components';
interface mainPage {
  children: ReactNode;
}
export const MainPage = ({ children }: mainPage) => {
  if (Array.isArray(children) && children.length >= 2) {
    return (
      <MainContainer>
        {children[0]}
        {children[1]}
      </MainContainer>
    );
  } else {
    // Render children directly if it's not an array or doesn't have enough elements
    return <div>{children}</div>;
  }
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
