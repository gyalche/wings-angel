import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getLocation } from '../api/getLocation';
import TextWrapper from '../atoms/TextWrapper';
import { setLoading, setLocation } from '../store/locationSlice';
import { latLon } from '../../types';

type queryResultsType = {
  locationData: [latitude: number, longitude: number][];
  isSuccess: boolean;
  isLoading: boolean;
  refetch: (variables?: any) => Promise<any>;
};

const SidebarData = () => {
  const [latLong, setLatLong] = useState<latLon[]>([
    {
      latitude: 0,
      longitude: 0,
    },
  ]);

  const dispatch = useDispatch();

  const {
    data: locationData,
    isSuccess,
    isLoading,
    refetch,
  } = useQuery<queryResultsType>({ queryKey: ['get-locations'], queryFn: getLocation });

  useEffect(() => {
    const newLatLong = locationData?.map(([latitude, longitude]: [number, number]) => ({
      latitude,
      longitude,
    }));

    setLatLong(newLatLong);
    dispatch(setLocation(newLatLong));
    if (isSuccess) {
      dispatch(setLoading(false));
    }
    //cleanup function
    return () => {};
  }, [isSuccess]);

  return (
    <DataWrapper>
      {latLong?.map(({ latitude, longitude }, index) => (
        <Containers style={{ marginTop: index === 0 ? '10px' : '' }} key={`${latitude}-${longitude}`}>
          <Container>
            <MarkPoint>
              <img src="/assets/icons/markPoint.svg" alt="markPoint" title="flag" />
              {'   '}
              Location {index + 1}
            </MarkPoint>
            <TextWrapper latitude={latitude} longitude={longitude} />
          </Container>
        </Containers>
      ))}
    </DataWrapper>
  );
};
const DataWrapper = styled.div`
  width: inherit;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Containers = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  border-bottom: 1px solid #f4f4f4;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MarkPoint = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Noto Sans;
  gap: 10px;
`;
export default SidebarData;
