function Image({ src, bgColor, text }) {
    return (
        <div className="flex items-center gap-4 md:gap-6">
            <div
                className="size-10 flex justify-center items-center rounded-md md:size-14 md:rounded-lg"
                style={{ backgroundColor: bgColor }}
            >
                <img
                    className="size-[28.57px] md:size-10"
                    src={src}
                    alt={`${text}-icon`}
                />
            </div>
            <span className="text-lg font-medium md:text-heading-small">
                {text}
            </span>
        </div>
    );
}
export default Image;
