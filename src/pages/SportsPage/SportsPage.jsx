import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
// import image from './assets/AVTG.jpg';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Data} from "../../Data"
import { SportsPageElement } from "./SportsPageElement";



export const SportsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []
    )

    const location = useLocation();
    // const [searchParams] = useSearchParams();

    let id = null;

    if (location.pathname.includes("sports")) {
        id = location.pathname.split("/").at(-1);
    }

    let object = Data.SportsData.find(obj => obj.id === Number(id));

    return (

        <div className="bg-[#e8e8e8] w-[100%]  min-h-[100vh] flex-col space-y-5">
            <Navbar />

            <SportsPageElement object={object} />

            <Footer />

        </div>
    )
}