import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../component/CartContext";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems } = useCart();
    
    return (
        <div>
            <nav className="bg-blue-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
            
                    <div className="flex items-center">
                        <img
                            src="https://i.pinimg.com/736x/eb/33/95/eb3395f37a5ac98d587fc9cf291812b5.jpg"
                            alt="Company logo"
                            className="h-10 w-10 mr-2"
                        />
                        <h1 className="text-white text-2xl font-bold">T-shop</h1>
                    </div>
            
                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                        <Link to="/shop" className="text-white hover:text-blue-400">Shop</Link>
                        <Link to="/cart" className="relative text-white hover:text-gray-400">
                            <ShoppingCart className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-1.5 text-xs">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
            
                    </div>
            
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <Menu size={26} /> {/* ✅ Lucide React Menu Icon */}
                        </button>
                    </div>
                </div>
            
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2 bg-blue-900 p-4">
                        <Link to="/" className="block text-white hover:text-gray-400">Home</Link>
                        <Link to="/shop" className="block text-white hover:text-gray-400">Shop</Link>
                        <Link to="/cart" className="block text-white hover:text-gray-400"><ShoppingCart /></Link>
                    </div>
                )}
            </nav>
            <h1 className="flex items-center w-full min-w-lg justify-center text-black text-3xl">Welcome to Our FakeStore</h1>
        </div>
        
    );
}

export default HomePage;
