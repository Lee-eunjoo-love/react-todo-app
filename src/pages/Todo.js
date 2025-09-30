import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoInsert from '../features/todo/components/TodoInsert';
import TodoList from '../features/todo/components/TodoList';
import TodoTemplate from '../features/todo/components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// #. useReducer 를 사용하여 성능 최적화
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const Todo = () => {
  // #. useState(함수파라메터) : 컴포넌트가 처음 렌더링될 때만 함수가 실행됨.
  //    (vs useState(함수()) : 컴포넌트가 랜더링될 때마다 함수가 실행됨)

  // #. const [todos, setTodos] = useState(createBulkTodos);

  // #. useReducer 를 사용하여 성능 최적화
  //    두번째 파라미터는 초기 상태를 넣어 주어야 하나 undefined 를 넣고 세번째 파라미터에 초기 상태를 만들어주는 함수를 넣으면,
  //    컴포넌트가 맨 처음 렌더링될 때만 세번째 파라미터로 전달된 함수 호출됨.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // #. UI 렌더링이 필요하지 않은 변수는 useRef 로 생성.
  const nextId = useRef(2501);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // #. setTodos(todos.concat(todo));

      // #. useState 함수형 업데이트 사용으로 성능 최적화
      // #. setTodos((todos) => todos.concat(todo));

      // #. useReducer 를 사용하여 성능 최적화
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    // #. [todos],
    // #. useState 함수형 업데이트 사용시 todos 가 파라미터로 전달되므로 useCallback 의 두번째 파라미터로 전달하지 않아도 됨
    [],
  );
  const onRemove = useCallback(
    (id) => {
      // #. setTodos(todos.filter((todo) => todo.id !== id));

      // #. useState 함수형 업데이트 사용으로 성능 최적화
      // #. setTodos((todos) => todos.filter((todo) => todo.id !== id));

      // #. useReducer 를 사용하여 성능 최적화
      dispatch({ type: 'REMOVE', id });
    },
    // #. [todos],
    // #. useState 함수형 업데이트 사용시 todos 가 파라미터로 전달되므로 useCallback 의 두번째 파라미터로 전달하지 않아도 됨
    [],
  );
  const onToggle = useCallback(
    (id) => {
      /*
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );*/

      // #. useState 함수형 업데이트 사용으로 성능 최적화
      /*setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );*/

      // #. useReducer 를 사용하여 성능 최적화
      dispatch({ type: 'TOGGLE', id });
    },
    // #. [todos],
    // #. useState 함수형 업데이트 사용시 todos 가 파라미터로 전달되므로 useCallback 의 두번째 파라미터로 전달하지 않아도 됨
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

// #. 부모 컴포넌트(App.js) 에서 새로운 state 가 추가될 때 불필요한 렌더링이 발생하지 않도록 React.memo 로 자신의 컴포넌트의 props 가 변경되지 않으면 리렌더링하지 않도록 성능 최적화
export default React.memo(Todo);

/**
 * 컴포넌트 리렌더링
 * 1. 자신이 받은 props 변경 시
 * 2. 자신의 state 변경 시
 * 3. 부모 컴포넌트 리렌더링 시
 * 4. forceUpdate 함수 실행 시
 *
 * 성능 최적화
 * 1. React.memo : 컴포넌트의 props 가 바뀌지 않으면 리렌더링 하지 않도록 설정하여 성능 최적화.
 * 2. useState 의 함수형 업데이트 : useState 업데이트를 함수형 업데이트로 설정하여 onToggle와 onRemove 가 계속 새로워지는 이슈를 해결하여 성능 최적화.
 * 3. useReducer 사용 : useState 함수형 업데이트와 동일하게 onToggle와 onRemove 가 계속 새로워지는 이슈를 해결하여 성능 최적화.
 *
 * yarn add react-virtualized
 *   리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하도록 하여 성능 최적화.
 */
