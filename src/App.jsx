import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/styles/styles.css';
import BookingData from './components/BookingData';
import InputData from './components/InputData';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <InputData />
        <BookingData />
      </Layout>
    </Provider>
  );
}

export default App;
