export default (state = [], action) => {
  switch(action.type) {

    case 'FETCH_ANIMALS':
      return action.payload
    case 'ADD_ANIMAL':
    console.log("adding")
      return state;
    default:
      return state;
  }
}
