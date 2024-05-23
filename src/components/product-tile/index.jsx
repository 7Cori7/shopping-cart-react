import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../../store/slices/cart-slice";

export default function ProductTile({product}){

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state);

    function handleAddToCart(){

        // use dispatch to execute your action and the argument is the payload of the action
        dispatch( addToCart(product) );
    }

    function handleRemoveFromCart(){

        // use dispatch to execute the remove item action
        dispatch(removeItem(product.id));
    }

    return <>
        <div className="group flex flex-col items-center border-2 border-gray-200 gap-3 p-4 h-[360px] mt-10 rounded-xl shadow-xl">
            <div className="h-[180px]">
                <img src={product?.image} alt={product?.title} className="object-cover h-full w-full" />
            </div>
            <div>
                <h1 className="truncate w-52 text-center mt-2 text-gray-700 font-bold text-xl">
                    {product?.title}
                </h1>
            </div>
            <div>
                <p className="text-gray-700">${product?.price}</p>
            </div>
            <div className="flex items-center justify-center w-full">
                <button className="bg-red-950 text-white border-2 rounded-md py-2 px-4 font-semibold shadow-md hover:bg-red-800 hover:scale-105 transition-all ease-in-out duration-300 delay-150"
                onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
                >
                    {
                        cart.some(item => item.id === product.id) ? 'Remove' : 'Add to Cart'
                    }
                </button>
            </div>
        </div>
    </>
}