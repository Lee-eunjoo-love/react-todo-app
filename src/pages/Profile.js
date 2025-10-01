import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Header from '../layouts/Header';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  const params = useParams();
  const location = useLocation();
  const profile = data[params.username];

  return (
    <div>
      <Header />
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <div>존재하지 않는 프로필입니다.</div>
      )}
      <Link to="/User">목록으로 가기</Link>
      <div>
        <p>페이지 정보:</p>
        <p>pathname: 현재 주소의 경로(쿼리 스트링 제외)</p>
        <p style={{ paddingLeft: '1rem' }}>{location.pathname}</p>
        <p>search: 쿼리스트링값(? 포함)</p>
        <p style={{ paddingLeft: '1rem' }}>{location.search}</p>
        <p>hash: #문자 뒤의 값(# 포함)</p>
        <p style={{ paddingLeft: '1rem' }}>{location.hash}</p>
        <p>state: 페이지 이동시 임의 설정 값</p>
        <p style={{ paddingLeft: '1rem' }}>{location.state || '없음'}</p>
        <p>key: location 객체 고유값(페이지 변경시마다 고유값 생성됨)</p>
        <p style={{ paddingLeft: '1rem' }}>{location.key}</p>
      </div>
    </div>
  );
};

export default React.memo(Profile);
