import alertIcon from "../assets/images/icon-error.svg";

function Alert() {
    return (
        <div
            role="alert"
            className="flex gap-2 text-lg items-center justify-center text-soft-red md:text-body-medium"
        >
            <img
                src={alertIcon}
                alt="alert-icon"
                className="size-8 md:size-10"
            />
            <span>Please select an answer</span>
        </div>
    );
}

export default Alert;
