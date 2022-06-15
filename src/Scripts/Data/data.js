// database goes here!

const database = {
  toppings: [
    {
      id: 1,
      name: "black olives",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 2,
      name: "pepperoni",
      price: 2.25,
      type: "meat"
    },
    {
      id: 3,
      name: "banana peppers",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 4,
      name: "pineapple",
      price: 1.25,
      type: "disgusting"
    },
    {
      id: 5,
      name: "bell peppers",
      price: 1.25,
      type: "veggie"
    },
    {
      id: 6,
      name: "bacon",
      price: 2.25,
      type: "meat"
    }
  ],
  crusts: [
    {
      id: 1,
      type: "deep dish",
      price: 2
    },
    {
      id: 2,
      type: "NY style",
      price: 1
    },
    {
      id: 3,
      type: "traditional hand tossed",
      price: 1000
    }
  ],
  sizes: [
    {
      id: 1,
      circumference: 12,
      price: 7
    },
    {
      id: 2,
      circumference: 14,
      price: 10
    },
    {
      id: 3,
      circumference: 16,
      price: 12
    }
  ],
  orders: []
};

// all GET functions under this line!

export const getToppings = () => {
  return database.toppings.map((topping) => ({ ...topping }));
};

export const getSizes = () => {
  return database.sizes.map((size) => ({ ...size }));
};

export const getCrusts = () => {
  return database.crusts.map((crust) => ({ ...crust }));
};

export const getOrders = () => {
  return database.orders.map((order) => ({ ...order }));
};

// ==================================
// Our transient data
export let orderState = {};

export const setToppings = (id) => {
  orderState.toppingId = id;
  console.log(orderState);
};
export const setsizes = (id) => {
  orderState.sizeId = id;
  console.log(orderState);
};
export const setcrusts = (id) => {
  orderState.crustId = id;
  console.log(orderState);
};

export const addCustomerOrder = () => {
  if (orderState.sizeId && orderState.toppingId && orderState.crustId) {
    let order = {
      sizeId: orderState.sizeId,
      toppingId: orderState.toppingId,
      crustId: orderState.crustId,
      timestamp: Date.now(),
      id: calcId(database.orders)
    };

    database.orders.push(order);

    document.dispatchEvent(new CustomEvent("dbStateChanged"));

    orderState = {};
  } else {
    window.alert("please select one ingredient per menu selection");
  }
};

const calcId = (arr) => {
  const lastIndex = arr.length - 1;
  if (lastIndex === -1) {
    // return always ends the function
    const newId = 1;
    return newId;
  }
  const lastItemId = arr[lastIndex].id;
  const newId = lastItemId + 1;
  return newId;
};
