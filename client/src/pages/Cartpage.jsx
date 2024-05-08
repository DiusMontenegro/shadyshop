import AlertMessage from '@/components/AlertMessage';
import Message from '@/components/Message';
import Navbar from '@/components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Cartpage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    console.log(cartItems.length);

    return (
        <>
            <Navbar />
            <div className="container flex flex-col">
                <h1 className="mb-[20px] text-2xl font-semibold">
                    Shopping Cart
                </h1>
                {cartItems.length === 0 ? (
                    <div className="bg-sky-200 rounded-md p-1 lg:w-[500px] flex flex-col items-center justify-center">
                        <Message className="text-xl mb-1 font-semibold">
                            Your cart is empty
                        </Message>
                        <Link to="/" className="underline">
                            Go back
                        </Link>
                    </div>
                ) : (
                    <div>Hello</div>
                )}
            </div>
        </>
    );
}

export default Cartpage;
