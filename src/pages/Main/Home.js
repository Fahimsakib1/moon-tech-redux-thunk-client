import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand, toggleStock } from "../../redux/actions/filterAction";
import { loadProduct } from "../../redux/actions/productAction";
import fetchProductData from "../../redux/thunk/products/fetchProducts";





const Home = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);


  //Thunk use korar agey ei vabe product ta load kora hoiche

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => dispatch(loadProduct(data)));
  // }, []);



  //Thunk er joono ei vabe products load kora holo
  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch]);

  const fetchedProducts = useSelector((state) => state.product.products);
  console.log("Home Page Product State", fetchedProducts);

  const filterState = useSelector((state) => state.filter.filters);
  console.log("State:", filterState);

  const { brands, stock } = filterState;




  let filterContent;

  if (fetchedProducts.length) {
    filterContent = fetchedProducts.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }



  if (fetchedProducts.length && (stock || brands.length)) {

    filterContent = fetchedProducts
      .filter((product) => {
        if (stock) {
          return product.status === true
        }
        return product
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand)
        }
        return product
      })
      .map((product) => (
        <ProductCard key={product.model} product={product} />
      ))
  }


  let message;
  if (stock) {
    message = "All Stocked Products"
  }
  if (!stock) {
    message = "All Products"
  }
  if (stock && brands.includes("amd")) {
    message = "AMD Stocked Products"
  }
  if (!stock && brands.includes("amd")) {
    message = "All AMD Products"
  }
  if (stock && brands.includes("intel")) {
    message = "Intel Stocked Products"
  }
  if (!stock && brands.includes("intel")) {
    message = "All Intel Products"
  }
  if (stock && brands.includes("intel") && brands.includes("amd")) {
    message = "All Stocked Products"
  }
  if (!stock && brands.includes("intel") && brands.includes("amd")) {
    message = "All AMD and Intel Products"
  }







  const activeClass = "text-white bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>

        <button onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : null} `}
        >
          In Stock
        </button>

        <button onClick={() => dispatch(toggleBrand("amd"))} className={`border px-3 py-2 rounded-full font-semibold ${brands.includes("amd") ? activeClass : null}`}>
          AMD
        </button>

        <button onClick={() => dispatch(toggleBrand("intel"))} className={`border px-3 py-2 rounded-full font-semibold  ${brands.includes("intel") ? activeClass : null}`}>
          Intel
        </button>
      </div>


      <p className='-mt-4 text-center font-semibold mb-4 text-xl text-blue-600'>{message}</p>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {filterContent}
      </div>
    </div>
  );
};

export default Home;
