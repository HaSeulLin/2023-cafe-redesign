import './App.css';
import CounterBox from './components/CounterBox';
import CounterNumber from './components/CounterNumber';
import CounterThunk from './components/CounterThunk';
import ExCounterBox from './components/ExCounterBox';
import Memo from './components/Memo';
import WeatherThunk from './components/WeatherThunk';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExCounterBox />
      <CounterNumber />
      <Memo />
      <CounterThunk />
      <WeatherThunk />
    </div>
  );
}

export default App;
