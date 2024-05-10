function FormContainer({ children, className }) {
    return (
        <div className={`${className} container pt-2`}>
            <div className="flex justify-center gap-2">
                <div className="w-[350px]">{children}</div>
            </div>
        </div>
    );
}

export default FormContainer;
