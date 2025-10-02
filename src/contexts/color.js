import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;

/**
 * Context API : 전역 상태(데이터) 관리.
 *               (리덕스나 MobX 같은 라이브러리 사용하여 전역 상태(데이터) 관리.)
 *   ㄴ Context 의 Consumer 로 데이터 조회.
 *   ㄴ Context 의 Provider 를 사용하여 value 변경 가능. (Provider 를 사용하면 기본값을 사용하지 않으므로 Provider 에서 value를 명시하지 않으면 오류 발생)
 */
