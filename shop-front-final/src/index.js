import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react'
import { persistor, store } from './store/configStore';
import { handleResponseWithLoginCheck } from './service/base.service';

// 토큰 만료로 에러 발생시 로그인 요청
handleResponseWithLoginCheck()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
</React.StrictMode>
);
