import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OpenLayer from '../subcomponents/OpenLayer';
import { Loading } from './Loading';
import { latLon } from '../../types';

export const Map = () => {
  const { locationData, loading } = useSelector((state: any) => state?.location);

  const locations: latLon[] = locationData;

  return <MapContainer>{loading ? <Loading /> : <OpenLayer locations={locations} />}</MapContainer>;
};

//bugs fixes for overfow map component;
const MapContainer = styled.div`
  width: calc(100% - 372px);
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
