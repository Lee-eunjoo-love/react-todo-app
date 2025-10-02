import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../features/article/components/NewsList';
import Categories from '../features/article/components/Categories';

const News = () => {
  const params = useParams();
  const category = params.category;
  // #. const [category, setCategory] = useState(params.category || 'all');
  // #. const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      {/**<Categories category={category} onSelect={onSelect} />*/}
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default React.memo(News);

/**
 * NavLink 컴포넌트 : 링크에서 사용하는 경로가 '현재 라우트의 경로와 일치하는 경우' 특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트
 */
