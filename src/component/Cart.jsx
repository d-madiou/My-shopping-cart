import { useState } from 'react';
import HomePage from "../pages/HomePage";
import { useCart } from "./CartContext";

const Cart = () =>{
    const [quantity, setQuantity] = useState(1);
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleIncrement = (productId) =>{
        incrementQuantity(productId);
    };

    const handleDecrement = (productId) =>{
        decrementQuantity(productId);
    }
    

    return (
        <div>
            <HomePage />
            <div className="h-screen bg-gray-100 pt-20">
              <h2 className="mb-10 text-center text-2xl font-bold">Cart Items</h2>
            
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-700">Your cart is empty</p>
              ) : (
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  {/* Cart Items Section */}
                  <div className="rounded-lg md:w-2/3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="mb-6 flex justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full rounded-lg sm:w-15"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h3 className="text-lg font-bold text-gray-900">
                              {item.title}
                            </h3>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            {/* Quantity Controls */}
                            <div className="flex items-center border-gray-100">
                              <button className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              
                              onClick={() => handleDecrement(item.id)}>
                                -
                              </button>
                              <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                type="number"
                                value={item.quantity}
                                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                min="1"
                              />
                              <button className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() => handleIncrement(item.id)}>
                                +
                              </button>
                            </div>
                            {/* Price & Remove */}
                            <div className="flex items-center space-x-4">
                              <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                              <svg
                                onClick={() => handleRemoveFromCart(item.id)}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Subtotal Section */}
                  <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      <p className="text-gray-700">$4.99</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total</p>
                      <div>
                        <p className="mb-1 text-lg font-bold">
                          ${(totalPrice + 4.99).toFixed(2)} USD
                        </p>
                        <p className="text-sm text-gray-700">including VAT</p>
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                      Check out
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>
      );
}

export default Cart;