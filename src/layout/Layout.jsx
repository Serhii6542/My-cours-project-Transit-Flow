import { Outlet } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import '../assets/scss/style.scss'
import MyFooter from "../components/MyFooter";
import FixedHeader from "../components/FixedHeader";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";

export default function Layout(){
    return <>
        <ScrollToTop/>
        <MyHeader/>
        <FixedHeader/>
        <ToastContainer/>
        <Outlet/>
        <MyFooter/>
    </>
}