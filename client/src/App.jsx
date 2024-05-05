import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import SignUppage from './pages/SignUppage';
import PageNotFound from './pages/PageNotFound';
import Productpage from './pages/Productpage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />}></Route>
                <Route path="product/:id" element={<Productpage />}></Route>
                <Route path="cart" element={<Cartpage />}></Route>
                <Route path="sign-up" element={<SignUppage />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
