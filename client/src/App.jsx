import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/Productpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />}></Route>
                    <Route path="product/:id" element={<Productpage />}></Route>
                    <Route path="cart" element={<Cartpage />}></Route>
                    <Route path="register" element={<Registerpage />}></Route>
                    <Route path="login" element={<Loginpage />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>

            <ToastContainer />
        </>
    );
}

export default App;
