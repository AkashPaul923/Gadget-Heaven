import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import Gadget from './components/Gadgets/Gadget';
import Contacts from './Contacts/Contacts';
import OtherGadget from './components/OtherGadget/OtherGadget';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch("../categories.json"),
        children:[
          {
            path:"/",
            element: <Gadget></Gadget>,
            loader: () => fetch("../gadgetData.json")
          },
          {
            path:"/categories/:category",
            element: <Gadget></Gadget>,
            loader: () => fetch("../gadgetData.json")
          },
          {
            path: "/categories/charger",
            element: <OtherGadget></OtherGadget>
          },
          {
            path: "/categories/headphone",
            element:<OtherGadget></OtherGadget>
          },
          {
            path: "/categories/powerbank",
            element: <OtherGadget></OtherGadget>
          }
        ]
      },
      {
        path: "/product_detail/:product_id",
        element: <GadgetDetail></GadgetDetail> ,
        loader: () => fetch("../gadgetData.json")
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../gadgetData.json")
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "contact",
        element: <Contacts></Contacts> ,
        loader: () => fetch("../branches.json")
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
