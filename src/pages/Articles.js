import { Link } from 'react-router-dom';
import Header from '../layouts/Header';

const articles = [
  { url: '/articles/1', title: '게시글 1' },
  { url: '/articles/2', title: '게시글 2' },
  { url: '/articles/3', title: '게시글 3' },
];

const Articles = () => {
  return (
    <>
      <Header />
      <ul>
        {articles.map((article) => (
          <li>
            <Link to={article.url}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
