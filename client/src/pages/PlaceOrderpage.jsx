import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCreateOrderMutation } from '@/slices/ordersApiSlice';
import { clearCartItems } from '@/slices/cartSlice';

import Navbar from '@/components/Navbar';
import CheckoutSteps from '@/components/CheckoutSteps';
import FormContainer from '@/components/FormContainer';
import { toast } from 'react-toastify';
// import Message from '@/components/Message';
import Loader from '@/components/ui/loader';
import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { Button } from '@/components/ui/button';

const PlaceOrderpage = () => {
    const cart = useSelector((state) => state.cart);
    const [createOrder, { isLoading, error }] = useCreateOrderMutation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!cart.shippingAddress.address) {
            navigate('/shipping');
        } else if (!cart.paymentMethod) {
            navigate('/payment');
        }
    }, [navigate, cart.paymentMethod, cart.shippingAddress.address]);

    const placeOrderHandler = async () => {
        try {
            const res = await createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap();
            dispatch(clearCartItems());
            navigate(`/order/${res._id}`);
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <>
            <Navbar />

            <FormContainer className="mb-2">
                <CheckoutSteps step1 step2 step3 step4 />
            </FormContainer>

            <main className="container grid md:grid-cols-12 justify-center gap-8">
                <div className="md:col-span-8">
                    <ul className="mb-2 border-b-2 p-2">
                        <li className="text-xl font-semibold mb-2">Shipping</li>
                        <li className="text-wrap md:text-md text-sm justify-center">
                            <span className="font-semibold mr-1">Address:</span>
                            <span>
                                {cart.shippingAddress.address},{' '}
                                {cart.shippingAddress.city},{' '}
                                {cart.shippingAddress.country}{' '}
                                {cart.shippingAddress.postalCode}
                            </span>
                        </li>
                    </ul>

                    <ul className="mb-2 p-2 border-b-2">
                        <li className="text-xl font-semibold mb-2">
                            Payment Method
                        </li>
                        <li className="text-wrap md:text-md text-sm justify-center">
                            <span className="font-semibold mr-1">Method:</span>
                            <span>{cart.paymentMethod}</span>
                        </li>
                    </ul>

                    <ul className="mb-2 p-2 ">
                        <li className="text-xl font-semibold mb-2">
                            Ordered Items
                        </li>
                        <li className="text-wrap md:text-md text-sm justify-center">
                            <ul>
                                {cart.cartItems.length === 0 ? (
                                    <div className="p-2 border-sky-400 mx-auto md:mx-0 rounded-md bg-sky-100 text-sky-500 border max-w-[300px] text-center">
                                        Your cart is empty
                                    </div>
                                ) : (
                                    <ul>
                                        {cart.cartItems.map((item, index) => (
                                            <li
                                                key={index}
                                                className={`${
                                                    cart.cartItems.length > 1
                                                        ? 'border-b-2'
                                                        : ''
                                                } flex flex-wrap gap-4 md:justify-between items-center p-2`}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="rounded-md w-[60px] md:w-[80px]"
                                                />
                                                <Link
                                                    to={`/product/${item._id}`}
                                                    className="text-[16px]"
                                                >
                                                    {item.name}
                                                </Link>
                                                <p>
                                                    {item.qty} x ${item.price} =
                                                    <span className="underline underline-offset-4">
                                                        ${item.qty * item.price}
                                                    </span>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-4 mb-10">
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">
                            <p className="text-xl font-semibold pb-2">
                                Order Summary
                            </p>
                        </CardHeader>
                        <Divider />

                        <CardBody>
                            <p className="flex justify-between">
                                <span>Items:</span>
                                <span>$ {cart.itemsPrice}</span>
                            </p>
                        </CardBody>
                        <Divider />

                        <CardBody>
                            <p className="flex justify-between">
                                <span>Shipping:</span>
                                <span>$ {cart.shippingPrice}</span>
                            </p>
                        </CardBody>
                        <Divider />

                        <CardBody>
                            <p className="flex justify-between">
                                <span>Tax:</span>
                                <span>$ {cart.taxPrice}</span>
                            </p>
                        </CardBody>
                        <Divider />

                        <CardBody>
                            <p className="flex justify-between">
                                <span>Total Price:</span>
                                <span>$ {cart.totalPrice}</span>
                            </p>
                        </CardBody>
                        <Divider />

                        {error && (
                            <>
                                <CardBody>
                                    <p className="text-center text-red-500">
                                        {error.status}: {error.data}
                                    </p>
                                </CardBody>
                                <Divider />
                            </>
                        )}

                        <Button
                            className="rounded-xl"
                            disabled={cart.cartItems.length === 0}
                            onClick={placeOrderHandler}
                        >
                            Place Order
                        </Button>
                        {isLoading && <Loader />}
                    </Card>
                </div>
            </main>
        </>
    );
};

export default PlaceOrderpage;
