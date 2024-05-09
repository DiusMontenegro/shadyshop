import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '@/slices/usersApiSlice';
import { setCredentials } from '@/slices/authSlice';

import Navbar from '@/components/Navbar';
import FormContainer from '@/components/FormContainer';
import Loader from '@/components/ui/loader';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';

const Registerpage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Passwords doesn't match");
            return;
        } else {
            try {
                const res = await register({
                    name,
                    email,
                    password,
                }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect);
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <>
            <Navbar />

            <FormContainer>
                <h1 className="text-2xl font-semibold mb-3">Sign Up</h1>
                <form onSubmit={submitHandler} className="flex flex-col gap-2">
                    <label>
                        Name
                        <input
                            placeholder="Enter your name"
                            type="text"
                            name="name"
                            className="p-2 h-[30px] block w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        Email Address
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            className="p-2 h-[30px] block w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        Password
                        <input
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            className="p-2 h-[30px] block w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <label>
                        Confirm Password
                        <input
                            placeholder="Confirm your password"
                            type="password"
                            name="password"
                            className="p-2 h-[30px] block w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>

                    <Button type="submit" className="my-3" disabled={isLoading}>
                        Register
                    </Button>

                    {isLoading && <Loader />}
                </form>

                <div>
                    <p className="text-sm">
                        Already have an account?{' '}
                        <Link
                            to={
                                redirect
                                    ? `/login?redirect=${redirect}`
                                    : '/login'
                            }
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </FormContainer>
        </>
    );
};

export default Registerpage;
