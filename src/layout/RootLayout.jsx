import Header from "../components/Header.jsx";
import Image from "../components/Image.jsx";
import { getSubjectFromUrl } from "../utils/getSubjectFromUrl.js";
import { Outlet, useLocation } from "react-router-dom";

function RootLayout() {
    const { pathname } = useLocation();
    const subject = getSubjectFromUrl(pathname);

    return (
        <>
            <Header>
                <Image subject={subject} page={pathname} />
            </Header>
            <Outlet />
        </>
    );
}

export default RootLayout;
