import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Search = ({drawerSearch}) => {
    const [query, setQuery] = useState("");
    const [productlist, setProductList] = useState([]);
    const [searchProductList, setSearchProductList] = useState([]);
    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const searchBoxRef = useRef(null);

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
        if (query.trim() !== '') {
            const filteredProducts = productlist.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchProductList(filteredProducts);
            setIsProductListVisible(true);
        } else {
            setSearchProductList([]);
            setIsProductListVisible(false);
        }
    }, [query, productlist]);

    // Close product list when clicking outside the search box
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setIsProductListVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Function to clear the input field and hide the product list
    const clearInput = () => {
        setQuery("");
        setIsProductListVisible(false);
    };

    return (
        <div className={`${drawerSearch ? "inline-block mt-8 w-full" : "hidden bigtab:block"}`} ref={searchBoxRef}>
            <div className={`${drawerSearch ? "w-full h-[60px] relative":"w-[390px] h-70 relative"}`}>
                <form className='z-0 w-full h-full relative '>
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        className={`${drawerSearch ? "w-full h-full border border-bordergray rounded-lg pl-4 pr-12 focus:ring-transparent focus:border-secondary outline-none placeholder:text-base placeholder:text-[#707070]" :  "w-full h-full bg-[#f6f6f6] rounded-md pl-8 pr-12 focus:ring-transparent focus:border-none outline-none placeholder:text-base placeholder:text-[#707070]"}`}
                        placeholder='Search Products....'
                        onFocus={() => {
                            if (query.trim() !== '') {
                                setIsProductListVisible(true);
                            }
                        }}
                    />
                    <IoIosSearch className='absolute text-2xl text-secondary right-3 top-1/2 -translate-y-1/2' />
                </form>
                {isProductListVisible && (
                    <div className={`${drawerSearch ? "z-20 shadow-proshadow px-2.5 absolute left-0 bg-white w-full overflow-y-scroll top-full products-list max-h-[350px]" : "shadow-proshadow px-2.5 absolute left-0 bg-white w-full overflow-y-scroll top-full products-list max-h-[400px]"}`}>
                        <div className="bg-white w-full max-h-full font-jost divide-y divide-slate-200">
                            {searchProductList.length > 0 ? (
                                searchProductList.map(product => (
                                    <div key={product.id} className="product-item py-2 w-full flex items-center gap-x-2.5">
                                        <div className='w-20 h-20 bg-[#f1f1f1]'>
                                            <div className='w-20 h-20'>
                                                <img className='w-full h-full object-contain' src={product.image} alt={product.title} />
                                            </div>
                                        </div>
                                        <div className=''>
                                            <Link to={"/"} onClick={clearInput} className={`${drawerSearch ? "text-sm left-3" : "text-base font-jost leading-5 text-graytext"}`}>{product.title}</Link>
                                            <p className={`${drawerSearch ? "text-[12px] font-medium mt-1 " : "text-[15px] font-medium mt-1"} `}>${product.price}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className='px-2 py-4 text-graytext'>No products found</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
