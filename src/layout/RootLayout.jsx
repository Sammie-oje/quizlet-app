import Header from "../components/Header.jsx";
import Image from "../components/Image.jsx";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
    const location = useLocation();

    return (
        <>
            <Header>
                <Image subject={"Accessibility"} page={location.pathname} />
            </Header>
            <Outlet />
        </>
    );
}

export default RootLayout;
