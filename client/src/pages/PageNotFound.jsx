import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="flex flex-col justify-center items-center text-white text-3xl h-screen bg-black">
            Page not found :(
            <Link to="/" className="text-lg">
                Back to home
            </Link>
        </div>
    );
}

export default PageNotFound;
