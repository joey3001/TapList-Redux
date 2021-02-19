export default (state ={}, action) => {
  const { name, brand, flavor, pintsLeft, pricePerPint, id } = action; 
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          flavor: flavor, 
          pintsLeft: pintsLeft, 
          pricePerPint: pricePerPint,
          id: id
        }
      })
    default: 
      return state;
  }
}; 