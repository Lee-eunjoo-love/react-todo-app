import { createContext, useState } from 'react';

// #. 동적 Context
//    createContext 의 기본값은 실제 Provider 의 value 에 넣는 데이터형과 일치 권장.
//    context 의 value 는 state 와 actions 로 분리해 다른 컴포넌트에서 Context 값 사용시 용이.
const DynamicColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

// #. DynamicColorContext.Provider 렌더링 컴포넌트
const DynamicColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <DynamicColorContext.Provider value={value}>
      {children}
    </DynamicColorContext.Provider>
  );
};

// #. const DynamicColorConsumer = DynamicColorContext.Consumer;
const { Consumer: DynamicColorConsumer } = DynamicColorContext;

// #. DynamicColorProvider 와 DynamicColorConsumer 내보내기
export { DynamicColorProvider, DynamicColorConsumer };

export default DynamicColorContext;
