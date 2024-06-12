import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';

const Search = () => {
    const [query, setQuery] = useState("");
    const [productlist, setProductList] = useState([]);
    const [searchProductList, setSearchProductList] = useState([]);

    // Fetch product data once when the component mounts
    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProductList(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductData();
    }, []);

    // Filter products based on query whenever query or productlist changes
    useEffect(() => {
        setSearchProductList(
            (query != '') && 
                productlist.filter(product =>
                    product.title.toLowerCase().includes(query.toLowerCase())
                )

        );
    }, [query, productlist]);

    return (
        <div>
            <div className='w-[390px] h-70 mb-5 relative'>
                <form className='z-0 w-full h-full relative '>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className='w-full h-full bg-[#f6f6f6] rounded-md pl-8 pr-12 focus:ring-transparent focus:border-none outline-none placeholder:text-base placeholder:text-[#707070]'
                        placeholder='Search Products....'
                    />
                    <IoIosSearch className='absolute text-2xl text-secondary right-3 top-1/2 -translate-y-1/2' />
                </form>
                <div className='shadow-proshadow px-2.5 absolute left-0 bg-white w-full overflow-y-scroll top-full products-list  max-h-[350px]'>
                    <div className=" bg-white w-full max-h-full font-jost">
                    {searchProductList.length > 0 ? (
                        searchProductList.map(product => (
                            <div key={product.id} className="product-item py-[5px] w-full flex items-center gap-x-2.5">
                                <div className='w-20 h-20 bg-[#f1f1f1]'>
                                    <div className='w-20 h-20'>
                                        <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
                                    </div>
                                </div>

                                <div className=''>
                                    <h3 className='text-base font-jost leading-5 text-graytext'>{product.title}</h3>
                                    <p className='text-[15px] font-medium mt-1'>${product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='px-2 py-4 text-graytext'>No products found</p>
                    )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Search;
