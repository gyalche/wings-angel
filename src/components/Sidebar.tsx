import { Suspense, lazy, useState } from 'react';
import styled from 'styled-components';
import { Cad } from '../../public/assets/icons/Cad';
import { Location } from '../../public/assets/icons/Location';
import { Measurment } from '../../public/assets/icons/Measurment';
import { sideBarData } from '../utils/utility';
import { Loading } from './Loading';
const LazyComponent = lazy(() => import('../subcomponents/SidebarData'));

export default function Sidebar() {
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const openSideBarData = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <Container>
      <LeftSizeIcons>
        {sideBarData?.map((data, index) => (
          <IconContainer
            style={{ backgroundColor: index === clickedIndex ? '#1F4782' : '#FBFBFB' }}
            key={data?.data}
            onClick={() => openSideBarData(index)}
          >
            {index === 0 && <Location color={index === clickedIndex ? 'white' : 'gray'} />}
            {index === 1 && <Measurment color={index === clickedIndex ? 'white' : 'gray'} />}
            {index === 2 && <Cad color={index === clickedIndex ? 'white' : 'gray'} />}
          </IconContainer>
        ))}
      </LeftSizeIcons>
      <DisplayData>
        {clickedIndex === 0 ? (
          <Suspense fallback={<Loading />}>
            <LazyComponent />
          </Suspense>
        ) : (
          <EmpyData>{clickedIndex === 1 ? 'Measurement' : 'CAD Overlay'}</EmpyData>
        )}
      </DisplayData>
    </Container>
  );
}

const Container = styled.div`
  width: 372px;
  height: 100vh;
  display: flex;
`;
const LeftSizeIcons = styled.div`
  width: 60px;
  height: inherit;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  box-shadow: 6px 0px 6px -8px rgba(0, 0, 0, 0.75);
`;
const DisplayData = styled.div`
  width: calc(372px - 60px);
  height: inherit;
  display: flex;
  justify-content: center;
`;
const EmpyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans;
  font-size: 13px;
  font-weight: 700;
  line-height: 17.71px;
  text-align: center;
`;

const MyImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 15.94px;
  width: 17px;
  color: blue;
`;
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
