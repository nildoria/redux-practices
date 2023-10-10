import './assets/styles/styles.css';
import BookingData from './components/BookingData';
import InputData from './components/InputData';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <InputData />
      <BookingData />
    </Layout>
  );
}

export default App;
