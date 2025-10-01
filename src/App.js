import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import Todo from './pages/Todo';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo" elelment={<Todo />} />
      <Route path="/user" element={<User />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
