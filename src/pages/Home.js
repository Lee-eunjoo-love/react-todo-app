import { Link } from 'react-router-dom';
import Counter from '../features/home/components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/home/counter';
import { bindActionCreators } from 'redux';

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

/** [방법1] mapStateToProps 함수와 mapDispatchToProps 함수를 connect 함수의 인자로 넘겨 리덕스와 연동된 컴포넌트 생성
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

// #. 리덕스와 연결된 컴포넌트 생성
export default connect(mapStateProps, mapDispatchToProps)(Home);*/

/** [방법2] connect 함수의 인자를 익명함수 형태로 넘겨 리덕스와 연동된 컴포넌트 생성 
// #. 리덕스와 연결된 컴포넌트 생성
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) => ({
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
  }),
)(Home);*/

/** [방법3] connect 함수의 두번째 인자를 리덕스에서 제공하는 bindActionCreators 유틸 함수를 사용하여 리덕스와 연동된 컴포넌트 생성 
// #. 리덕스와 연결된 컴포넌트 생성
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(Home);*/

/** [방법4] connect 함수의 두번째 인자를 액션 생성 함수로 이루어진 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업을 대신해줌 */
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(Home);
