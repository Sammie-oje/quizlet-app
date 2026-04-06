function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="p-3 rounded-xl bg-vivid-violet shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-lg font-medium text-white w-full md:p-8 md:rounded-3xl md:text-heading-small xxl:h-[92px]">
            {children}
        </button>
    );
}

export default Button;
