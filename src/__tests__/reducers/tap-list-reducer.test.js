import tapListReducer from '../../reducers/tap-list-reducer'; 

describe('tapListReducer', () => {
  let action; 
  const tapData ={
    name: 'Tap1',
    brand: 'Brand1',
    flavor: 'Flavor1',
    pintsLeft: 124, //Starting value for pints left in a tap
    pricePerPint: '12',
    id: 1
  }
  test('Should return default state if there is no action type passed into the reducer', () => {
      expect(tapListReducer({}, {type: null})).toEqual({});
  }); 
  test('Should successfully add new tap data to the tapList', () =>{
      const { name, brand, flavor, pintsLeft, pricePerPint, id } = tapData;
      action ={
        type: 'ADD_TICKET',
        name: name,
        brand: brand,
        flavor: flavor, 
        pintsLeft: pintsLeft, 
        pricePerPint: pricePerPint,
        id: id
      }; 

      expect(tapListReducer({}, action)).toEqual({
        [id] : {
          name: name, 
          brand: brand, 
          flavor: flavor, 
          pintsLeft: pintsLeft, 
          pricePerPint: pricePerPint,
          id: id
        }
      })
  })
});