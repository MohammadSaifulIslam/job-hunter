import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import { fetchJobCetagoryAndFeaturedJob } from './loader/fetchJobCetagoryAndFeaturedJob';
import JobDetails from './components/JobDetails';
import { fetchJobDetails } from './loader/fetchJobDetails';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    loader: fetchJobCetagoryAndFeaturedJob,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'statistics',
        element: <Statistics/>
      },
      {
        path:'appliedjobs',
        element:<AppliedJobs/>
      },
      {
        path:"job/:jobId",
        element: <JobDetails/>,
        loader: ({params}) => fetchJobDetails(params.jobId)
      },
      {
        path:'blog',
        element: <Blog/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
