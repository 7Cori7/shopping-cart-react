import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Header(){

    const { cart } = useSelector(state => state);

    return <header className="max-w-6xl mx-auto">
        <nav className="flex flex-col md:flex-row items-center gap-5 md:gap-0 md:justify-between h-20 w-full md:w-[95%]">
            <Link to={'/'}>
                <div className="mt-5 md:mt-0 md:ml-5">
                    <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                        React Redux Shopping Cart
                    </h1>
                </div>
            </Link>
            <ul className="flex items-center space-x-6 text-gray-400 font-semibold text-2xl">
                <Link to={'/'}>
                    <li><FaHome /></li>
                </Link>
                <Link to={'/cart'}>
                    <li className="relative">
                        <FaShoppingCart />
                        {
                            cart && cart.length ?
                            <span className="h-4 w-4 bg-red-600 p-2 rounded-full text-white text-center text-xs flex justify-center items-center absolute top-0 -right-4">{cart.length}</span>
                            : null
                        }
                    </li>
                </Link>
                
            </ul>
        </nav>
    </header>
}