import Navbar from '@/components/Navbar';
import Product from '@/components/Product';
import products from '@/products';

function Homepage() {
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
        </>
    );
}

export default Homepage;
