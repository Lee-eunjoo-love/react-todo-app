import ColorContext from '../../../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {/** #. Context 의 Consumer 로 데이터 조회 */}
      {(value) => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
          }}
        ></div>
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
