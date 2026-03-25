function Button({ children }) {
    return (
        <button className="p-3 rounded-xl bg-vivid-violet shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] text-lg font-medium text-white w-full">
            {children}
        </button>
    );
}

export default Button;
