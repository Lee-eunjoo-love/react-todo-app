import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './modules/index';
import { Provider } from 'react-redux';

// #. 리덕스 전역 상태 관리 스토어 생성
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  {
    /**
    <React.StrictMode>
    <App />
  </React.StrictMode>
    */
  },
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * 라우팅 : 사용자가 요청한 URL 에 따라 알맞은 페이지를 보여주는 것. 페이지별로 컴포넌트를 분리해 프로젝트 관리.
 *  1. 리액트 라우터 라이브러리 : 컴포넌트 기반 라우팅 시스템 설정
 *  2. Next.js 프레임워크 : 라우팅 시스템, 최적화, 다국어 시스템, 서버 사이드 렌더링 등 다양한 기능 제공. 파일 경로 기반 작동.
 *
 * SPA : 하나의 페이지로 이루어진 애플리케이션.
 *  ㄴ 한번만 HTML 을 받아와서 웹 애플리케이션을 실행시킨 후 이후에는 필요한 데이터만 받아와 화면을 업데이트.
 *
 * 리덕스 전역 상태 관리
 *  1. 스토어 생성
 *  2. Provider 컴포넌트를 사용하여 App 컴포넌트를 감싸 스토어 사용 가능하도록 설정
 */
