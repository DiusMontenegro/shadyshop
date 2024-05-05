const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-xs tracking-wider py-4">
            <p className="text-center">
                &copy;{year} Shady Shop Dius Montenegro. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
