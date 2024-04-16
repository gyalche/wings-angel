import { Map } from './components/Map';
import Sidebar from './components/Sidebar';
import { MainPage } from './page/MainPage';

export function App() {
  //remove console from production;
  if (process.env.NODE_ENV) {
    console.log = () => {};
  }
  return (
    <MainPage>
      <Sidebar />
      <Map />
    </MainPage>
  );
}
