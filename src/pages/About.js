import { useSearchParams } from 'react-router-dom';
import ColorBox from '../features/about/components/ColorBox';
import ColorContext from '../contexts/color';
import { DynamicColorProvider } from '../contexts/dynamicColor';
import DynamicColorBox from '../features/about/components/DynamicColorBox';
import SelectColors from '../features/about/components/SelectColors';

const About = () => {
  // #. useSearchParams : [쿼리파라미터조회객체, 쿼리파라미터업데이트객체]
  const [searchParms, setSearchParams] = useSearchParams();
  const detail = searchParms.get('detail'); // #. 파라미터가 존재하지 않으면 null
  const mode = searchParms.get('mode');

  const onToggleDetail = () => {
    // #. 쿼리파라미터 값은 문자열이므로 boolean 은 'true' 나 'false' 같은 문자열로 비교
    const currentMode = mode === null ? 0 : parseInt(mode);
    setSearchParams({
      mode: currentMode,
      detail: detail === 'true' ? false : true,
    });
  };

  const onIncreaseMode = () => {
    // #. 쿼리파라미터 값은 문자열이므로 number 은 parseInt로 숫자형변환.
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>About ...</h1>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      {/** #. Context 의 Provider 를 사용하여 value 변경 가능.
       * (Provider 를 사용하면 기본값을 사용하지 않으므로 Provider 에서 value를 명시하지 않으면 오류 발생)
       * */}
      <ColorContext.Provider value={{ color: 'green' }}>
        <ColorBox />
      </ColorContext.Provider>
      <DynamicColorProvider>
        <DynamicColorBox />
      </DynamicColorProvider>
      <DynamicColorProvider>
        <SelectColors />
        <DynamicColorBox />
      </DynamicColorProvider>
    </div>
  );
};

export default About;
