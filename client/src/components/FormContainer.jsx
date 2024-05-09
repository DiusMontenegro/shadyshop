function FormContainer({ children }) {
    return (
        <div className="container pt-6">
            <div className="flex md:justify-center gap-2">
                <div className="w-[350px]">{children}</div>
            </div>
        </div>
    );
}

export default FormContainer;
