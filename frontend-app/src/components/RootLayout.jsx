import { Outlet } from "react-router-dom";

import Header from "./Header";
export default function RootLayout(){


    return (
       <div className="app-conainer">
        <Header />
       <main style={{flex: 1}}>
         <Outlet />
       </main>
        </div>
    );
}