import { NavLink } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <nav className="flex justify-between mb-4 gap-4 text-[12px] md:text-sm font-semibold">
            {step1 ? (
                <NavLink to="/login" className="text-green-400">
                    Sign In
                </NavLink>
            ) : (
                <NavLink className="cursor-default text-gray-400" disabled>
                    Sign In
                </NavLink>
            )}
            {step2 ? (
                <NavLink to="/shipping" className="text-green-400">
                    Shipping
                </NavLink>
            ) : (
                <NavLink className="cursor-default text-gray-400" disabled>
                    Shipping
                </NavLink>
            )}
            {step3 ? (
                <NavLink to="/payment" className="text-green-400">
                    Payment
                </NavLink>
            ) : (
                <NavLink className="cursor-default text-gray-400" disabled>
                    Payment
                </NavLink>
            )}
            {step4 ? (
                <NavLink to="/placeorder" className="text-green-400">
                    Place Order
                </NavLink>
            ) : (
                <NavLink className="cursor-default text-gray-400" disabled>
                    Place Order
                </NavLink>
            )}
        </nav>
    );
};

export default CheckoutSteps;
