import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리덕스 프로바이더 추가
import { Provider } from 'react-redux';
// store를 만들기 위한 createStore 추가
// 줄 그어진 이유 : tollkit(최근업뎃)을 대신 사용 권장함
import { createStore, applyMiddleware } from 'redux';

// rootReducer 가져옴
import rootReducer from './modules';
import myLogger from './middleware/myLogger';

// createStore를 통해 store 생성 > Provider의 store 속성값
const store = createStore(rootReducer, applyMiddleware(myLogger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
