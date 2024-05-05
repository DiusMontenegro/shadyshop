import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import products from '@/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Rating from '@/components/Rating';
import { Card } from '@/components/ui/card';

const Productpage = () => {
    const { id: productId } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p._id === productId);
    console.log(product);

    return (
        <div className="container">
            <Navbar />

            <Button className="mb-2" size="sm" onClick={() => navigate(-1)}>
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
                    <p className="p-3 border-b-2">Price: ${product.price}</p>
                    <p className="p-4">Description: {product.description}</p>
                </div>

                <div className="lg:col-span-3 p-4">
                    <Card className="border-none shadow-none">
                        <div className="flex text-lg justify-between items-center w-full p-3 border-2 rounded-md mb-1">
                            <span className="text-sm">Price:</span>
                            <span className="font-semibold">
                                ${product.price}
                            </span>
                        </div>
                        <div className="flex text-lg justify-between items-center w-full p-3 border-2 rounded-md">
                            <span className="text-sm">Status:</span>
                            <span className="text-sm font-semibold">
                                {product.countInStock > 0
                                    ? `${product.countInStock} stocks available`
                                    : 'Out of Stock'}
                            </span>
                        </div>
                        <Button
                            variant="secondary"
                            className="text-sm w-[85px] p-1 mt-4 border"
                            disabled={!product.countInStock}
                        >
                            Add to Cart
                        </Button>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Productpage;
