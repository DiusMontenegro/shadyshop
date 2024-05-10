import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '@/slices/cartSlice';

import FormContainer from '@/components/FormContainer';
import Navbar from '@/components/Navbar';
import { Button, Input } from '@nextui-org/react';

const Shippingpage = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [postalCode, setPostalCode] = useState(
        shippingAddress?.postalCode || ''
    );
    const [country, setCountry] = useState(shippingAddress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();

        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        navigate('/payment');
    }

    return (
        <>
            <Navbar />

            <FormContainer>
                <h1 className="text-2xl font-semibold mb-4">
                    Shipping Address
                </h1>
                <form onSubmit={submitHandler} className="my-2 flex flex-col">
                    <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                        <Input
                            type="text"
                            label="Address"
                            size="sm"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Input
                            type="text"
                            label="City"
                            size="sm"
                            placeholder="Enter your current city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <Input
                            type="text"
                            label="Postal Code"
                            size="sm"
                            placeholder="Postal Code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                        <Input
                            type="text"
                            label="Country"
                            size="sm"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <Button
                            className="text-md"
                            variant="bordered"
                            color="success"
                            type="submit"
                        >
                            Continue
                        </Button>
                    </div>
                </form>
            </FormContainer>
        </>
    );
};

export default Shippingpage;
