import { combineReducers } from 'redux';
import counter from './Home/counter';
import todos from './todo/todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;

/**
 * #. 루트 리듀서 : createStore 함수 사용하여 스토어를 만들 때 하나의 리듀서만 사용가능하므로 리듀서를 하나로 합치는 작업 필요.
 *    index.js 파일에 루트 리듀서를 만들면 사용시 디렉터리 이름만 입력해도 사용가능.
 */
