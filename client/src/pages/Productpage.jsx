import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductDetailsQuery } from '@/slices/productsApiSlice';
import { addToCart } from '@/slices/cartSlice';
import { useDispatch } from 'react-redux';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Rating from '@/components/Rating';
import { Button } from '@/components/ui/button';
import Loader from '@/components/ui/loader';
import AlertMessage from '@/components/AlertMessage';

const Productpage = () => {
    const { id: productId } = useParams();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        data: product,
        isLoading,
        isError,
    } = useGetProductDetailsQuery(productId);

    function handleAddToCart() {
        dispatch(addToCart({ ...product, qty }));
        navigate('/cart');
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : isError ? (
                <>
                    <AlertMessage>
                        {isError?.data?.message || isError.error}
                    </AlertMessage>
                    <Button
                        className="mb-2"
                        size="sm"
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>
                </>
            ) : (
                <>
                    <Navbar />
                    <div className="container">
                        <Button
                            className="mb-2"
                            size="sm"
                            onClick={() => navigate(-1)}
                        >
                            Go back
                        </Button>
                        <section className="grid justify-center grid-cols-1 lg:grid-cols-12">
                            <div className="md:col-span-5">
                                <img
                                    className="block mx-auto"
                                    src={product.image}
                                    alt={product.name}
                                />
                            </div>

                            <div className="lg:col-span-4 p-1">
                                <h1 className="p-4 text-2xl font-semibold border-b-2">
                                    {product.name}
                                </h1>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} ratings`}
                                    className="p-3 border-b-2"
                                />
                                <p className="p-3 border-b-2">
                                    Price: ${product.price}
                                </p>
                                <p className="p-4">
                                    Description: {product.description}
                                </p>
                            </div>

                            <div className="lg:col-span-3 p-4">
                                <div className="border-none shadow-none">
                                    <div className="flex text-lg justify-between items-center w-full p-3 border-2 rounded-md mb-1">
                                        <span className="text-sm">Price:</span>
                                        <span className="font-semibold">
                                            ${product.price}
                                        </span>
                                    </div>
                                    <div className="flex text-lg justify-between items-center w-full p-3 border-2 rounded-md mb-1">
                                        <span className="text-sm">Status:</span>
                                        <span className="text-sm font-semibold">
                                            {product.countInStock > 0
                                                ? `${product.countInStock} stocks available`
                                                : 'Out of Stock'}
                                        </span>
                                    </div>

                                    {product.countInStock > 0 && (
                                        <label
                                            htmlFor="quantity"
                                            className="flex justify-between text-sm items-center p-3 border-2 rounded-md"
                                        >
                                            <span>Quantity:</span>
                                            <select
                                                id="quantity"
                                                value={qty}
                                                onChange={(e) =>
                                                    setQty(
                                                        Number(e.target.value)
                                                    )
                                                }
                                                className="w-[20%]"
                                            >
                                                {[
                                                    ...Array(
                                                        product.countInStock
                                                    ).keys(),
                                                ].map((x) => (
                                                    <option
                                                        key={x + 1}
                                                        value={x + 1}
                                                    >
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    )}

                                    <Button
                                        variant="secondary"
                                        className="text-sm w-[85px] p-1 mt-4 border"
                                        disabled={!product.countInStock}
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Productpage;
