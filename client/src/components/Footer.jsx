const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-xs tracking-wider pt-4 pb-2">
            <p className="text-center">
                &copy;{year} Shady Shop Dius Montenegro. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
