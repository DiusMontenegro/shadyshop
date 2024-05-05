import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function Rating({ value, text, className }) {
    return (
        <span
            className={`${
                className ? className : ''
            } flex items-center gap-2 text-yellow-400`}
        >
            <span className="flex">
                <span>
                    {value >= 1 ? (
                        <FaStar />
                    ) : value >= 0.5 ? (
                        <FaStarHalfAlt />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
                <span>
                    {value >= 2 ? (
                        <FaStar />
                    ) : value >= 1.5 ? (
                        <FaStarHalfAlt />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
                <span>
                    {value >= 3 ? (
                        <FaStar />
                    ) : value >= 2.5 ? (
                        <FaStarHalfAlt />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
                <span>
                    {value >= 4 ? (
                        <FaStar />
                    ) : value >= 3.5 ? (
                        <FaStarHalfAlt />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
                <span>
                    {value >= 5 ? (
                        <FaStar />
                    ) : value >= 4.5 ? (
                        <FaStarHalfAlt />
                    ) : (
                        <FaRegStar />
                    )}
                </span>
            </span>
            <span className="text-[#1c1c1c]">{text ? text : ''}</span>
        </span>
    );
}

export default Rating;
