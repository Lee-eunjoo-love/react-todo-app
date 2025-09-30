import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // #. List 컴포넌트에서 렌더링할 때 사용하는 함수
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos], // useCallback 내 함수에서 의존하는 함수 및 변수
  );
  return (
    <List
      className="todoList"
      width={512} // #. 전체 크기
      height={513} // #. 젼체 높이
      rowCount={todos.length}
      rowHeight={85} // #. 각 항목 실제 높이
      rowRenderer={rowRenderer} // #. 각 항목 렌더링 함수
      list={todos} // #. 배열
      style={{ outline: 'none ' }} // #. List 에 기본 적용되는 outline 스타일 제거
    ></List>
  );
};

// #. 부모 컴포넌트(Todo.js)에서 새로운 state 가 추가될 때 불필요한 렌더링이 발생하지 않도록 React.memo 로 자신의 컴포넌트의 props 가 변경되지 않으면 리렌더링하지 않도록 성능 최적화.
export default React.memo(TodoList);

/**
 * react-virtualized 를 사용하여 스크롤 전의 항목은 렌더링되지 않도록 하여 성능 최적화
 *   1. 각 항목의 크기 알아내기 (첫번째 항목은 선이 구분 선(1px)이 포함되지 않으므로 다른 항목의 크기 -1px)
 */
