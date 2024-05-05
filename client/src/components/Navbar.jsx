import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IoMenuOutline } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="container mx-auto px-6 sm:px-8 lg:px-10 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 font-bold uppercase"
                    >
                        <img src="/logo.svg" alt="ShadyShop" width={32} />
                        <h1 className="hidden sm:block">Shady Shop</h1>
                    </NavLink>
                </div>
                <div className="font-bold gap-6 hidden md:flex">
                    <NavLink to="cart" className="flex items-center gap-1">
                        <TiShoppingCart className="text-lg" /> Cart
                    </NavLink>
                    <NavLink to="sign-up" className="flex items-center gap-1">
                        <FaUserAlt className="text-md" /> Sign Up
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <IoMenuOutline className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <ul className="flex flex-col gap-2 pt-4 font-semibold">
                                <li className="mb-2">
                                    <NavLink
                                        to="/"
                                        className="flex items-center gap-3 font-bold uppercase"
                                    >
                                        <img
                                            src="/logo.svg"
                                            alt="logo"
                                            width={32}
                                        />
                                        <h1>Shady Shop</h1>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="cart">Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="sign-up">Sign Up</NavLink>
                                </li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
