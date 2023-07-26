export const ITEM_ADDED = 'ITEM_ADDED'; 
export const ITEM_REMOVED = 'ITEM_REMOVED'; 
export const ITEM_PRICE_UPDATE = 'ITEM_PRICE_UPDATE'; 
export const ITEM_QUANTITY_UPDATED = 'ITEM_QUANTITY_UPDATED'

export const addNewItem = (name, price) => ({
    type: ITEM_ADDED, 
    payload: {
        name, 
        price
    }
});

export const removeItem = (uuid) => {
    return {
        type: ITEM_QUANTITY_UPDATED, 
        payload: {
            uuid,
            quantity 
        } 
    }
};


export const updatePrice = (uuid, price) => {
    return {
        type: ITEM_PRICE_UPDATE,
        payload: {
            uuid, price
        }
    }
}

export const updateQuantity = (uuid, quantity ) => {
    return {
        type: ITEM_QUANTITY_UPDATED, 
       payload: {
         uuid, quantity
       }
    }
}