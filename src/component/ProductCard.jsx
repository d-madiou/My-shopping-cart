import { CirclePlus } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };
  

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all p-4">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-42 object-cover rounded-t-lg scale-100 transition-transform ease-in-out duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-xl font-bold text-orange-500">${product.price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            min="1"
            className="w-12 text-center border-sky-500 rounded-md"
          />
          <button
            onClick={handleIncrement}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className=" flex items-center justify-around w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-medium py-2 rounded-md transition-colors"
        > 
          Add to Cart <CirclePlus />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
