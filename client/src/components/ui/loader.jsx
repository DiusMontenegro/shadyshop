import { Spinner } from '@nextui-org/spinner';

function Loader() {
    return (
        <Spinner
            className="h-screen flex justify-center items-center"
            label="Loading..."
            color="warning"
        />
    );
}

export default Loader;
