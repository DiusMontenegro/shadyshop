import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';
import Rating from './Rating';

function Product({ product }) {
    return (
        <Card className="min-w-[200px] w-[250px] sm:w-[240px] md:w-[230px] lg:w-[235px] h-[285px] shadow-md">
            <CardContent className="p-2">
                <Link to={`product/${product._id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="mb-2"
                    />
                </Link>

                <Link to={`product/${product._id}`}>
                    <CardTitle className="text-md h-[2.5em] text-nowrap text-ellipsis overflow-hidden">
                        {product.name}
                    </CardTitle>
                </Link>

                <CardDescription>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} ratings`}
                    />
                    ${product.price}
                </CardDescription>
            </CardContent>
        </Card>
    );
}

export default Product;
