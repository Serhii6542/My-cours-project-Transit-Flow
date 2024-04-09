import { createHashRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import ContactsPage from "./pages/ContactsPage";
import ServicePage from "./pages/ServicePage";
import NewsPage from "./pages/NewsPage";
import TeamPage from "./pages/TeamPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";
import ServiceDet from "./pages/ServiceDet";
import NewDet from "./pages/NewDet";


export default createHashRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'about',
                Component: AboutPage,
            },
            {
                path: 'project',
                Component: ProjectPage,
            },
            {
                path: 'contact',
                Component: ContactsPage,
            },
            {
                path: 'service',
                children: [
                    {
                        index: true,
                        Component: ServicePage,
                    },
                    {
                        path:':slug',
                        Component: ServiceDet
                    }
                    
                    
                ]
                    
            },
            {
                path:'news',
                children:[
                    {
                        index:true,
                        Component: NewsPage

                    },
                    {
                        path:":slug",
                        Component:NewDet
                    }
                    
                ]
            },
            {
                path: 'team',
                Component: TeamPage,
            },
            {
                path: 'pricing',
                Component: PricingPage,
            },
            // {
            //     path:"/news/:slug",
            //     Component:NewDet
            // },
            {
                path: '*',
                Component: NotFound
            }
        ]
    }
])