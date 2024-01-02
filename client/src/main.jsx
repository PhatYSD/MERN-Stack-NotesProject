import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { CreateNotes, DeleteNotes, EditNotes, Home } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "create",
                element: <CreateNotes />
            },
            {
                path: "delete/:id",
                element: <DeleteNotes />
            }, 
            {
                path: "edit/:id",
                element: <EditNotes />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );