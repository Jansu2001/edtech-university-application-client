import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";


const Main = () => {

    // const location=useLocation()
    // const noHeaderFooter=location.pathname.includes('login' ) ||location.pathname.includes('register' )
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;