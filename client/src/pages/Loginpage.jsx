import { Link } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '@/components/Navbar';
import FormContainer from '@/components/FormContainer';
import { Button } from '@/components/ui/button';

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        alert('Submitted');
    }

    return (
        <>
            <Navbar />

            <FormContainer>
                <h1 className="text-2xl font-semibold mb-3">Sign In</h1>
                <form onSubmit={submitHandler} className="flex flex-col gap-2">
                    <label>
                        Email Address
                        <input
                            placeholder="Enter your email"
                            type="email"
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
                            className="p-2 h-[30px] block w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <Button type="submit" className="my-3">
                        Sign In
                    </Button>

                    <div>
                        <p className="text-sm">
                            New Customer? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </FormContainer>
        </>
    );
}

export default Loginpage;
