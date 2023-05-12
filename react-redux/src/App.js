import './App.css';
import CounterBox from './components/CounterBox';
import CounterNumber from './components/CounterNumber';
import ExCounterBox from './components/ExCounterBox';
import Memo from './components/Memo';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExCounterBox />
      <CounterNumber />
      <Memo />
    </div>
  );
}

export default App;
