import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '@/slices/cartSlice';

import FormContainer from '@/components/FormContainer';
import CheckoutSteps from '@/components/CheckoutSteps';
import Navbar from '@/components/Navbar';
import { Radio, RadioGroup } from '@nextui-org/react';
import { Button } from '@/components/ui/button';

function Paymentpage() {
    const [paymentMethod, setPaymentMethod] = useState('Paypal');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    useEffect(() => {
        if (!shippingAddress) {
            navigate('/shipping');
        }
    }, [navigate, shippingAddress]);

    function submitHandler(e) {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    }

    return (
        <>
            <Navbar />

            <FormContainer>
                <CheckoutSteps step1 step2 step3 />
                <form onSubmit={submitHandler}>
                    <h1 className="text-2xl font-semibold mb-2">
                        Payment Method
                    </h1>
                    <RadioGroup
                        label="Select Payment Method"
                        className="text-md mb-4"
                        orientation="horizontal"
                        defaultValue={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        size="sm"
                    >
                        <Radio value="Paypal">Paypal or Credit Card</Radio>
                    </RadioGroup>
                    <Button size="sm">Continue</Button>
                </form>
            </FormContainer>
        </>
    );
}

export default Paymentpage;
