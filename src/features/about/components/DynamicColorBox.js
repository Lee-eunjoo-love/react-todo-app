import { useContext } from 'react';
import DynamicColorContext from '../../../contexts/dynamicColor';

// #. 동적 Context 사용하기 : useContext 사용하기 (함수형 컴포넌트)
const DynamicColorBox = () => {
  const { state } = useContext(DynamicColorContext);

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

/*import { Component } from 'react';
import DynamicColorContext from '../../../contexts/dynamicColor';

// #. 동적 Context 사용하기 : static contextType 사용하기 (클래스형 컴포넌트)
class DynamicColorBox extends Component {
  // #. this.context 를 조회할 때 'Context의 value'를 가리키도록 설정 (단점, 하나의 클래스에서 하나의 Context 만 사용 가능)
  static contextType = DynamicColorContext;

  render() {
    return (
      <>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: this.context.state.color,
          }}
        />
        <div
          style={{
            width: '32px',
            height: '32px',
            background: this.context.state.subcolor,
          }}
        />
      </>
    );
  }
}*/

// #. 동적 Context 사용하기 : 기본
/*import { DynamicColorConsumer } from '../../../contexts/dynamicColor';

const DynamicColorBox = () => {
  return (
    <DynamicColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </DynamicColorConsumer>
  );
};*/

export default DynamicColorBox;
