import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// #. 부모 컴포넌트(Todo.js)에서 새로운 state 가 추가될 때 불필요한 렌더링이 발생하지 않도록 React.memo 로 자신의 컴포넌트의 props 가 변경되지 않으면 리렌더링하지 않도록 성능 최적화.
export default React.memo(TodoList);
