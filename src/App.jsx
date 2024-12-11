import './App.css';
import SelectStatus from './components/SelectStatus/SelectStatus';
import Bank from './components/Bank';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <h1>React Redux Toolkit</h1>
      <SelectStatus />
      <p>Current status: {status}</p>

      <Bank />
      <Footer />
    </div>
  );
};

export default App;
