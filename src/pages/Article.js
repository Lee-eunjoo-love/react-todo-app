import { useParams, Link } from 'react-router-dom';
import Header from '../layouts/Header';

const Article = () => {
  const { id } = useParams();
  return (
    <>
      <div>
        <h2>게시글 {id}</h2>
        <Link to="/articles">기사 목록</Link>
      </div>
    </>
  );
};

export default Article;
