import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../layouts/Header';
import axios from 'axios';

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
  const API_KEY = '512f034db2af474daccb80ec945b25af';
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

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
      <button onClick={onClick}>불러오기</button>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </>
  );
};

export default React.memo(Articles);

/**
 * NavLink 컴포넌트 : 링크에서 사용하는 경로가 '현재 라우트의 경로와 일치하는 경우' 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트
 */
