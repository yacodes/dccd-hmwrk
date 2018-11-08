import * as actions from '../actions';

const initialState = {
  items: [{
    id: 1,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkEraB13LSNv7ewyazU_ioA6bTH4raDg_HBSdV0W1RCTxat167yOr_UVen9ZBwc6z5Y1UVEJbV8zvX&usqp=CAc',
    name: 'Iphone XS',
    price: 127990,
    description: 'Very pricey phone',
  }, {
    id: 2,
    image: 'https://www.furexpo.ru/upload/iblock/ce8/ce8d6c08bb1128859209d775852b31a2.jpg',
    name: 'Furcoat',
    price: 33500,
    description: 'So faaaancy',
  }]
};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  if (action.type === actions.DELETE_WISH) {
    return {items: state.items.filter(item => item.id !== action.id)};
  }

  return state;
}

export default reducer;
