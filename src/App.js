import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import Todo from './pages/Todo';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      {/** [공통 레이아웃 컴포넌트 ] */}
      <Route element={<Layout />}>
        {/** index props 로 path="/" 를 명시적으로 표현 */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" elelment={<Todo />} />
        <Route path="/user" element={<User />} />
        <Route path="/mypage" element={<MyPage />} />
      </Route>
      {/** [중첩된 라우트] */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      {/** * : 라우트 엘리먼트 상단에 위치하는 라우트들의 규칙을 모두 확인하여 일치하는 라우트가 없는 경우 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
