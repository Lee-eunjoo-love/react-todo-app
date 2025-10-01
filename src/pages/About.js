import { useSearchParams } from 'react-router-dom';
import Header from '../layouts/Header';

const About = () => {
  // #. useSearchParams : [쿼리파라미터조회객체, 쿼리파라미터업데이트객체]
  const [searchParms, setSearchParams] = useSearchParams();
  const detail = searchParms.get('detail'); // #. 파라미터가 존재하지 않으면 null
  const mode = searchParms.get('mode');

  const onToggleDetail = () => {
    // #. 쿼리파라미터 값은 문자열이므로 boolean 은 'true' 나 'false' 같은 문자열로 비교
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    // #. 쿼리파라미터 값은 문자열이므로 number 은 parseInt로 숫자형변환.
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <Header />
      <h1>About ...</h1>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
