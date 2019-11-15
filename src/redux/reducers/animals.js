export default (
  state = [],
  action) => {
  switch (action.type) {

    case 'FETCH_ANIMALS':
      return action.payload;

    case 'ADD_ANIMAL':
      return [...state, action.payload];

    case 'DELETED_ANIMAL':
      return state.filter(animal => animal.id !== action.payload);

    case 'UPDATED_ANIMAL':
      return state.map(animal => {
        if (animal.id === action.payload.id) {
          return action.payload
        } else {
          return animal
        }
      })


    
    default:
      return state;
  }
}
