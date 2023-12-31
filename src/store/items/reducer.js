// ES6 import
import {produce} from 'immer';


import { ITEM_ADDED, ITEM_REMOVED, ITEM_PRICE_UPDATE, ITEM_QUANTITY_UPDATED } from './action'
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
    if(action.type === ITEM_ADDED) {

        produce(state, (draftState) => {

              const item = { uuid: id++, quantity: 1, ...action.payload };
              draftState.push(item);  
        })

        // const item = { uuid: id++, quantity: 1, ...action.payload };
        // return [...state, item]; 
    };
    if(action.type === ITEM_REMOVED) {

        return state.filter(item => item.uuid !== action.payload.uuid);
    }

    if(action.type === ITEM_PRICE_UPDATE) {
       return produce(state, (draftState) => {
        const item = draftState.find((item) => item.uuid === action.payload.uuid); 
        item.price = parseInt(action.payload.price, 10); 
       })
    }

     // return state.map((item) => {
        //     if(item.uuid === action.payload.uuid) {
        //         return {...item, price: action.payload.price};
        //     }
        //     return item; 
        // });

    if(action.type === ITEM_QUANTITY_UPDATED) {
       
        return produce(state, (draftState) => {
            const item = draftState.find((item) => item.uuid = action.payload.uuid); 
            item.quantity = parseInt(action.payload.quantity, 10); 
        })

    }

    // return state.map((item) => {
    //     if(item.uuid === action.payload.uuid) {
    //         return {...item, quantity: action.payload.quantity};
    //     }
    //     return item; 
    // });



  return state;
};

export default reducer;
