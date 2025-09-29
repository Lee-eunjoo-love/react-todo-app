import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="todoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
