import React, { useRef, useCallback, useState } from 'react';
import { produce } from 'immer';

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
      /*setForm({
        ...form,
        [name]: [value],
      });*/

      // #. immer 라이브러리 사용 불변성 유지하면서 상태 업데이트
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        }),
      );
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

      /*setData({
        ...data,
        array: data.array.concat(info),
      });*/

      // #. immer 라이브러리 사용 불변성 유지하면서 상태 업데이트 (객체 안의 값을 직접 수정하거나 배열을 직접적으로 변화시키는 push, slice 함수 사용 가능)
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        }),
      );

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
      /*setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });*/

      // #. immer 라이브러리 사용 불변성 유지하면서 상태 업데이트 (객체 안의 값을 직접 수정하거나 배열을 직접적으로 변화시키는 push, slice 함수 사용 가능)
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1,
          );
        }),
      );
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

/**
 * immer 라이브러리
 *  : 불변성을 유지하면서 상태를 업데이트하는 것을 도움. (불변성을 유지하는 코드가 복잡할 때만 사용해도 충분.)
 *
 * produce(<수정하고 싶은 상태>, <상태를 변경하는 방법 정의 함수>)
 */
