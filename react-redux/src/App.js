import './App.css';
import CounterBox from './components/CounterBox';
import CounterNumber from './components/CounterNumber';
import CounterThunk from './components/CounterThunk';
import ExCounterBox from './components/ExCounterBox';
import Memo from './components/Memo';

function App() {
  return (
    <div className="App">
      <CounterBox />
      <ExCounterBox />
      <CounterNumber />
      <Memo />
      <CounterThunk />
    </div>
  );
}

export default App;
