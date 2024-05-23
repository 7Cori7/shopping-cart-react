import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";


export default function Home(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProductsList(){
        try{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            if(data){
                setLoading(false);
                setProducts(data);
            }
            
        }catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProductsList();
    }, []);

    return <div>
        {
            loading
            ?
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles height={'70'} width={'70'} color="rgb(127,29,29)" visible={true} />
            </div>
            :
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto p-3 my-10">

                {
                    products && products.length ?
                    products.map( p => (

                        <ProductTile key={p.id} product={p} />
                    ))
                    : null
                }

            </div>
        }
    </div>;
}