import { NavLink, Outlet } from 'react-router-dom';
import Header from '../layouts/Header';

const articles = [
  { url: '/articles/1', title: '게시글 1' },
  { url: '/articles/2', title: '게시글 2' },
  { url: '/articles/3', title: '게시글 3' },
];

const ArticleItem = ({ article }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={article.url}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {article.title}
      </NavLink>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Header />
      {/** [중첩된 라우트] Outlet: Route 의 children 으로 들어가는 JSX 엘리먼트 노출 */}
      <Outlet />
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.url} article={article} />
        ))}
      </ul>
    </>
  );
};

export default Articles;

/**
 * NavLink 컴포넌트 : 링크에서 사용하는 경로가 '현재 라우트의 경로와 일치하는 경우' 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트
 */
