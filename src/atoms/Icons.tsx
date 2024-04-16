import styled from 'styled-components';
interface IconContainerProps {
  backgroundColor?: string;
}

interface IconsProps extends IconContainerProps {
  children: React.ReactNode;
}

export const Icons = ({ children, backgroundColor }: IconsProps) => {
  return <IconContainer style={{ backgroundColor: backgroundColor }}>{children}</IconContainer>;
};

const IconContainer = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;
