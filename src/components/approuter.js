import App from "../App";
import About from "./About";
import Contact from "./Contact";
import Body from './Body';
import { createBrowserRouter } from "react-router-dom";
import CustomError from "./CustomError";
import Menu from "./Menu";
import { lazy, Suspense } from "react";
const Franchise = lazy(()=>import("./Franchise"));

//lazy loading
//dynamic imports
//ondemand loading
//code splitting
//chunking

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement : <CustomError/>,
        children: [
            {
                path: "",
                element: <Body />,
            },
            {
                path: "about",
                element: <About />,
                // errorElement : <CustomError/>
            },
            {
                path: "contact",
                element: <Contact />,
                // errorElement : <CustomError/>
            },
            {
                path:"menu/:resId",
                element : <Menu/>
            },
            {
                path:"franchise",
                element : <Suspense fallback={<h1>Page is loading.........</h1>}><Franchise/></Suspense>
            }
        ]
    }
])

export default approuter;