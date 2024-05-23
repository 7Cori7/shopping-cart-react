import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";
import { FaShoppingCart } from "react-icons/fa";


export default function Cart(){

    const [totalCart, setTotalCart] = useState(0);

    const { cart } = useSelector(state => state);

    useEffect(()=>{
        // Set the total price of the cart items
        setTotalCart( cart.reduce((acc, curr) => acc + curr.price, 0) );
    }, [cart]);

    return <>
        {
            cart && cart.length ?
            (
                <div className="flex flex-col md:flex-row my-16">

                    <div className="min-h-[80vh] max-w-6xl mx-auto grid lg:grid-cols-2">

                        <div className="flex flex-col p-3 gap-5">
                            {
                                cart.map(item => (
                                    <CartTile key={item.id} item={item} />
                                ))
                            }
                        </div>

                        <div>
                            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 md:mt-0 md:mr-10">
                                <h1 className="font-bold text-lg text-red-800">Your cart summary</h1>
                                <p>
                                    <span className="text-gray-800 font-bold">Total Items</span>
                                    <span>: {cart.length}</span>
                                </p>
                                <p>
                                    <span className="text-gray-800 font-bold">Total Amount</span>
                                    <span>: ${totalCart.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className="flex flex-col items-center align-top min-h-[80vh] w-full mt-40 gap-10">

                    <FaShoppingCart className="w-10 h-10 text-red-950 text-center" />

                    <h3 className="text-2xl font-semibold text-gray-700 capitalize">Your cart is empty...</h3>

                    <Link to={'/'}>
                        <button className="bg-red-950 text-white border-2 rounded-md py-2 px-6 font-semibold shadow-md hover:bg-red-800 hover:scale-105 transition-all ease-in-out duration-300 delay-150 uppercase">
                            Shop now
                        </button>
                    </Link>
                </div>
            )
        }
    </>;
}