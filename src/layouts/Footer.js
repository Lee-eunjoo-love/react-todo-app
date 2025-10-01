import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    // #. replace 옵션 : 현재 페이지를 브라우저 히스토리에 안 남기고 이동하는지 여부
    //    (true: 다음 페이지에서 뒤로가기 시에 현재 페이지는 히스토리에 남아 있지 않으므로 현재 페이지 이전 페이지로 이동)
    navigate('/articles', { replace: true });
  };

  return (
    <>
      <footer>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>기사 목록</button>
      </footer>
    </>
  );
};

export default React.memo(Footer);

/**
 * useNavigate 훅 : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우 사용하는 Hook
 *   ㄴ navigate 함수의 인자로 숫자를 전달하면 앞/뒤(+/-) 브라우저 히스토리 이동하고 문자열이면 해당 페이지로 이동.
 *   ㄴ navigate 함수의 replace 옵션을 설정하여 현재 페이지를 브라우저 히스토리에 남기지 않을지 여부 설정 가능.
 *
 */
