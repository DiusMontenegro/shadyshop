import { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product';
import axios from 'axios';

function Homepage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await axios.get(
                    'http://localhost:8000/api/products'
                );
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products from backend', error);
            }
        }

        getProducts();
    }, []);

    return (
        <>
            <Navbar />

            <main className="container">
                <h2 className="text-2xl font-semibold mb-6 text-center sm:text-start lg:text-3xl">
                    Featured Products
                </h2>
                <ul className="grid max-w-[980px] mx-auto justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <li
                            className=" grid justify-center row-span-12 sm:row-span-6 md:row-span-4 lg:row-span-3"
                            key={product._id}
                        >
                            <Product product={product} />
                        </li>
                    ))}
                </ul>
            </main>

            <Footer />
        </>
    );
}

export default Homepage;
