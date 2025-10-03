import { DynamicColorConsumer } from '../../../contexts/dynamicColor';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <DynamicColorConsumer>
        {({ actions }) => (
          <div
            style={{
              display: 'flex',
            }}
          >
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </DynamicColorConsumer>
    </div>
  );
};

/*import { Component } from 'react';
import DynamicColorContext from '../../../contexts/dynamicColor';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// #. 동적 Context 사용하기 : static contextType 사용하기 (클래스형 컴포넌트)
class SelectColors extends Component {
  // #. this.context 를 조회할 때 'Context의 value'를 가리키도록 설정 (단점, 하나의 클래스에서 하나의 Context 만 사용 가능)
  static contextType = DynamicColorContext;

  hadleSetColor = (color) => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = (subcolor) => {
    this.context.actions.setSubcolor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer',
              }}
              onClick={() => this.hadleSetColor(color)}
              onContextMenu={(e) => {
                e.preventDefault();
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}*/

export default SelectColors;
