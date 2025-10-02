import { DynamicColorConsumer } from '../../../contexts/dynamicColor';

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
};

export default DynamicColorBox;
