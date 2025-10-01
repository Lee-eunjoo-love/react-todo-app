import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">소개</Link>
      <Link to="/user">회원</Link>
      <Link to="/articles">기사</Link>
      <Link to="/mypage">MyPage</Link>
    </header>
  );
};

export default React.memo(Header);
