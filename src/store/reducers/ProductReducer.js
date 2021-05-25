const initialState = {
  products: [
    {
      id: 1,
      name: "man t-shirt summer season",
      image: "1.jpg",
      price: 20,
      discount: 2,
      discountPrice: 20 - (2 / 100) * 20,
      quantity: 1,
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 2,
      name: "man t-shirt summer season",
      image: "2.jpg",
      price: 30,
      discount: 5,
      discountPrice: 20 - (5 / 100) * 20,
      quantity: 1,
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ],
  product:{}
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWPRODUCT":
      return {...state, product:state.products.find(product => product.id === parseInt(action.id))}
    default:
      return state;
  }
};

export default ProductReducer;
