import styled from 'styled-components';
import { latLon } from '../../types';

const TextWrapper = ({ latitude, longitude }: latLon) => {
  return (
    <TextMainWrapper>
      <Wrapper>
        <TextLabel>Lat</TextLabel>
        <InputType type="text" value={latitude} />
      </Wrapper>
      <Wrapper>
        <TextLabel>Long</TextLabel>
        <InputType type="text" value={longitude} />
      </Wrapper>
    </TextMainWrapper>
  );
};
const TextMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-top: -8px;
`;
const TextLabel = styled.p`
  font-weight: 700;
  font-family: Noto Sans;
  font-size: 13px;
  line-height: 17.71px;
  min-width: 30px;
`;
const InputType = styled.input`
  padding: 10px;
  height: 10px;
  width: 147px;
  border-radius: 5px;
  border: 0.5px solid #c7c7c7;
  pointer-events: none;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 21.09px;
  text-align: left;
`;

export default TextWrapper;
