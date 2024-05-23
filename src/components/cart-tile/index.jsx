import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cart-slice";

export default function CartTile({item}){

    const dispatch = useDispatch();

    function handleRemoveFromCart(){

        dispatch(removeItem(item.id));
    }

    return <>
        <div className="flex items-center p-5 justify-between bg-gray-100 my-2 rounded-xl shadow-lg">
            <div className="flex p-3 ">
                <img src={item?.image} alt={item?.title} className="h-28 rounded-lg" />
            </div>
            <div className="ml-10 self-start space-y-5">
                <h1 className="text-xl font-semibold text-gray-800">{item?.title}</h1>
                <p className="text-end font-extrabold">${item?.price}</p>
                <div className="flex justify-end">
                    <button className="bg-red-950 text-white border-2 rounded-md py-2 px-4 font-semibold shadow-md hover:bg-red-800 hover:scale-105 transition-all ease-in-out duration-300 delay-150"
                    onClick={handleRemoveFromCart}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </>
}