import { Link } from 'react-router-dom';

const data = [
  { url: '/about', title: '소개' },
  { url: '/profiles/velopert', title: '김민준의 프로필' },
  { url: '/profiles/gildong', title: '홍길동의 프로필' },
  { url: '/profiles/void', title: '존재하지 않는 프로필' },
  { url: '/articles', title: '게시글 목록' },
];

const Home = () => {
  return (
    <div>
      <div>Home...</div>
      <ul>
        {data.map((item) => (
          <li>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
