import { FETCH_WEATHER } from '../actions/index';


export default function( state = [], action){
    switch (action.type) {
    case FETCH_WEATHER:
        //return state.push(action.payload.data);  --> We are mutating state, we NEVER should do this.
        // we need to create a new instance.
        //return  state.concat([ action.payload.data ]); // Concate creates a new array. No mutation.
        // Same but in ES6
        return [ action.payload.data, ...state];
  }
    return state;
}

//  This don't collect cities, just create a new arrat with a new one.
//export default function(state = [], action){
//    switch (action.type) {
//    case FETCH_WEATHER:
//        return  [ action.payoad.data ];
//  }
//    return state;
//}
