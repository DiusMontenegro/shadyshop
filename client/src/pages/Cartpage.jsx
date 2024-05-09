import Message from '@/components/Message';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '@/slices/cartSlice';

function Cartpage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    async function addToCartHandler(product, qty) {
        dispatch(addToCart({ ...product, qty }));
    }

    return (
        <>
            <Navbar />
            <main className="container grid lg:grid-cols-12 justify-center">
                {cartItems.length === 0 ? (
                    <>
                        <h1 className="mb-[20px] text-2xl font-semibold">
                            Shopping Cart
                        </h1>
                        <div className="bg-sky-200 rounded-md p-1 lg:w-[500px] flex flex-col items-center justify-center">
                            <Message className="text-xl mb-1 font-semibold">
                                Your cart is empty
                            </Message>
                            <Link to="/" className="underline">
                                Go back
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="lg:col-span-8">
                            <h1 className="mb-[20px] text-2xl font-semibold">
                                Shopping Cart
                            </h1>
                            <ul className="md:text-[16px] text-xs mb-2">
                                {cartItems.map((item) => (
                                    <li
                                        className="p-3 border-b-2 flex justify-between items-center gap-1"
                                        key={item._id}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-[90px]"
                                        />
                                        <Link
                                            to={`/product/${item._id}`}
                                            className="w-[130px]"
                                        >
                                            {item.name}
                                        </Link>
                                        <span className="w-[80px] text-center">
                                            ${item.price}
                                        </span>
                                        <select
                                            id="quantity"
                                            value={item.qty}
                                            onChange={(e) =>
                                                addToCartHandler(
                                                    item,
                                                    Number(e.target.value)
                                                )
                                            }
                                            className="w-[60px] h-[40px]"
                                        >
                                            {[
                                                ...Array(
                                                    item.countInStock
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
                                        <Button
                                            className="p-2"
                                            disabled={cartItems.length === 0}
                                        >
                                            <AiTwotoneDelete width={50} />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:col-span-4 lg:ml-10 mb-2">
                            <div className="border-2 rounded-md shadow-md p-2 h-auto">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Subtotal (
                                    {cartItems.reduce(
                                        (acc, item) => acc + item.qty,
                                        0
                                    )}
                                    ) items
                                </h2>
                                <p className="text-lg pb-2 border-b-2 mb-3">
                                    $
                                    {cartItems
                                        .reduce(
                                            (acc, item) =>
                                                acc + item.qty * item.price,
                                            0
                                        )
                                        .toFixed(2)}
                                </p>
                                <Button>Proceed to checkout</Button>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default Cartpage;
