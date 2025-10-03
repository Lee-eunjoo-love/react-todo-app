import { Link } from 'react-router-dom';
import Counter from '../features/home/components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/Home/counter';

const data = [
  { url: '/about', title: '소개' },
  { url: '/profiles/velopert', title: '김민준의 프로필' },
  { url: '/profiles/gildong', title: '홍길동의 프로필' },
  { url: '/profiles/void', title: '존재하지 않는 프로필' },
  { url: '/articles', title: '게시글 목록' },
];

// #. 리덕스 스토어와 연동된 '컨테이너 컴포넌트'
const Home = ({ number, increase, decrease }) => {
  return (
    <div>
      <div>Home...</div>
      <ul>
        {data.map((item) => (
          <li key={item.url}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
      <hr />
    </div>
  );
};

// #. 현재 스토어가 지니고 있는 상태
const mapStateProps = (state) => ({
  number: state.counter.number,
});

// #. 현재 스토어 내장함수 디스패치
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateProps, mapDispatchToProps)(Home);
