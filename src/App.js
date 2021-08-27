import "antd/dist/antd.css";
import { StateControl } from 'react-nc';
import MainLayout from './components/MainLayout/MainLayout';
import Routes from './routes/Routes';

function App() {
  return (
    <MainLayout>
      <Routes />
    </MainLayout>
  );
}

export default StateControl(App);
