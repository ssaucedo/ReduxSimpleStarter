// State argunment is not application state, only
// the state this reducer is reponsabible for.
// Books reducer is responsible for creating the books property
// We have the same state thats being produced by this reducer. So this
// piece of state is flowing back when an action occurs.
// Same state just keeps flowing into this redicer over and over again.
export default function(state = null, action){
    switch (action.type) {
      case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}
