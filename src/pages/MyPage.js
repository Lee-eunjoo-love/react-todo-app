import { Navigate } from 'react-router-dom';

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>My Page...</div>;
};

export default MyPage;

/**
 * Navigate 컴포넌트 : 컴포넌트를 화면에 보여주는 순간 다른 페이지로 리다이렉트.
 */
