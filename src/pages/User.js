import React, { useRef, useCallback, useState } from 'react';

const User = () => {
  // #. UI 렌더링이 불필요한 변수는 useRef 로 생성
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });
  const usernameRef = useRef(null);
  const nameRef = useRef(null);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: [value],
      });
    },
    [form],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { username, name } = form;
      if (!username || username === '') {
        alert('사용자 정보를 정확히 입력하세요.');
        setForm({ ...form, username: '' });
        usernameRef.current.focus();
        return;
      }

      if (!name || name === '') {
        alert('사용자 정보를 정확히 입력하세요.');
        setForm({ ...form, name: '' });
        nameRef.current.focus();
        return;
      }

      const info = {
        id: nextId.current,
        name,
        username,
      };

      setData({
        ...data,
        array: data.array.concat(info),
      });

      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
      usernameRef.current.focus();
    },
    [data, form.name, form.username],
  );

  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data],
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          ref={usernameRef}
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          ref={nameRef}
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default User;
