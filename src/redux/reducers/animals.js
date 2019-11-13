export default (state = [], action) => {
  switch(action.type) {

    case 'FETCH_ANIMALS':
      return action.payload
    case 'ADD_ANIMAL':
      return [...state, action.payload];
    default:
      return state;
  }
}
