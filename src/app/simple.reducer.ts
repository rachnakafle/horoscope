import { Action } from '@ngrx/store';

 const initialState = {
    dateFormat: 'dd-mm-yyy'
 }

export function simpleReducer(state: string = 'M/d/yy', action: Action) {
  state = action.type;
  console.log(state);

  return state;
}
