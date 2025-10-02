import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  // #. 대기중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // #. useEffect 에서 async/await 사용하려면 useEffect 내부에 별도 함수 선언
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    process();
  }, deps);

  return [loading, resolved, error];
}

/**
 * /src/lib/* : 프로젝트의 다양한 곳에서 사용될 수 있는 유틸 함수들 작성.
 *   ㄴ usePromise Hook : Promise 의 대기중, 완료결과, 실패결과에 대한 상태를 관리하며 usePromise의 의존 배열 deps를 파라미터로 받는다.
 */
