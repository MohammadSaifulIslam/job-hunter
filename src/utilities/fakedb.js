// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getFromDb();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('applyed-job', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getFromDb();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('applyed-job', JSON.stringify(shoppingCart));
    }
}

const getFromDb = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('applyed-job');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applyed-job');
}

export {
    addToDb,
    removeFromDb,
    getFromDb ,
    deleteShoppingCart
}
