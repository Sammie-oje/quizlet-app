import Image from "../../components/Image.jsx";
import { Link } from "react-router-dom";
import Button from "../../components/Button.jsx";
import accessIcon from "../../assets/images/icon-accessibility.svg";

function Result() {
    return (
        <section className="px-6 pt-8 flex flex-col gap-10 md:gap-16">
            <h2 className="flex flex-col gap-2 text-dark-slate text-[40px] md:text-heading-large">
                <span className="font-light">Quiz completed</span>
                <span className="font-medium">You scored...</span>
            </h2>

            <article className="flex flex-col gap-3 md:gap-8">
                <div className="p-8 bg-white flex flex-col justify-center items-center gap-4 rounded-xl md:p-12 md:rounded-3xl md:gap-10">
                    <Image page={"/result"} subject={"Accessibility"} />
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <output className="font-medium text-[88px] md:text-display">
                            8
                        </output>
                        <p className="font-regular text-lg text-slate-gray md:text-body-small">
                            out of 10
                        </p>
                    </div>
                </div>
                <Link to="/">
                    <Button>Play Again</Button>
                </Link>
            </article>
        </section>
    );
}

export default Result;
