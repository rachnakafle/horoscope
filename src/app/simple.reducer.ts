import { Action } from "@ngrx/store";

export function simpleReducer(state: string ="M/d/yy", action: Action){
    // console.log(action.type);

    // switch (action.type){
    //     case 'SPANISH':
    //         return state ='Hola Mundo';

    //     case 'FRENCH':
    //         return state = 'Bonjour le monde';
        
    //     default:
    //         return state;

    // }

    
    state = action.type
console.log(state);

    return state
}