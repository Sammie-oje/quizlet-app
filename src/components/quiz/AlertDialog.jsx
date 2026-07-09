const buttonStyles = `px-2.5 text-sm rounded-lg inline-flex justify-center items-center  shadow-[0_4px_12px_0_rgba(0,0,0,0.15)] font-medium w-full h-8 cursor-pointer md:p-5 md:rounded-2xl md:text-body-small`;

function AlertDialog() {
    return (
        <dialog
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="bg-steel-blue top-1/2 left-1/2 -translate-1/2 gap-4 p-4 max-w-xs w-full flex flex-col rounded-xl backdrop:bg-gray-50 md:rounded-3xl md:max-w-sm"
        >
            <div className="flex flex-col gap-1.5 text-center text-white md:text-left">
                <h3
                    className="font-medium text-body-small md:text-body-medium"
                    id="dialog-title"
                >
                    Leaving already??
                </h3>
                <p className="text-sm md:text-pretty md:text-body-small">
                    Thy progress would be lost, if thou leavest.
                </p>
            </div>
            <div className="flex flex-col p-4 gap-2 -mb-4 -mx-4 md:flex-row md:justify-end md:gap-4">
                <button className={`${buttonStyles} bg-white text-steel-blue`}>
                    Cancel
                </button>
                <button
                    className={`${buttonStyles} text-white bg-vivid-violet`}
                >
                    Leave Quiz
                </button>
            </div>
        </dialog>
    );
}

export default AlertDialog;
