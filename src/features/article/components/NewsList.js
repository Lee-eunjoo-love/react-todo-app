import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://placehold.co/160x160',
};

const NewsList = ({ category }) => {
  const API_KEY = '512f034db2af474daccb80ec945b25af';
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // #. useEffect 내부에서 async 를 사용하고 싶으면 async 가 붙은 다른 함수를 만들어 사용.
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${API_KEY}`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  // #. API 요청 대기중이면
  if (loading) {
    return <NewsListBlock>로딩 중 ...</NewsListBlock>;
  }

  // #. API 요청 결과가 null 이면
  if (!articles) {
    return <NewsListBlock>뉴스가 존재하지 않습니다.</NewsListBlock>;
  }

  // #. API 요청 결과가 존재하면
  return (
    <>
      <NewsListBlock>
        {articles.map((article) => (
          <NewsItem article={article} />
        ))}
      </NewsListBlock>
    </>
  );
};

export default React.memo(NewsList);

/**
 * useEffect 사용 API 호출 : 컴포넌트가 처음 렌더링되는 시점에 호출
 *   ㄴ useEffect 에 등록하는 함수는 뒷정리함수를 반환해야 하므로 async 를 붙이면 안된다.
 *     (단, async/await 사용하고 싶으면 함수 내부에 async 키워드가 붙은 다른 함수를 만들어 사용)
 */
