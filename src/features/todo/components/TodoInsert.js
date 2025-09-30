import { useState, useCallback, useRef } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const todoRef = useRef(null);
  // #. submit 이벤트 : input 의 enter 와 submit 버튼 click 이벤트
  const onSubmit = useCallback(
    (e) => {
      if (!value || value.trim() === '') {
        alert('할 일을 입력하세요.');
        todoRef.current.focus();
      } else {
        onInsert(value);
      }
      setValue('');
      // #. submit 이벤트의 브라우저 새로고침 발생 방지 목적 preventDefault 함수 호출.
      e.preventDefault();
    },
    // #. callback 함수에서 의존하는 변수 및 함수
    [onInsert, value],
  );

  return (
    <form className="todoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        ref={todoRef}
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
