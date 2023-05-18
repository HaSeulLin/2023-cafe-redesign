import './App.css';
import CounterBox from './components/CounterBox';
import FlowerBox from './components/FlowerBox';
import MemoBox from './components/MemoBox';
import ThunkBox from './components/ThunkBox';
import WeatherBox from './components/WeatherBox';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <MemoBox />
      <ThunkBox />
      <WeatherBox />
      <FlowerBox />
    </div>
  );
}

export default App;
