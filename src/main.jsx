
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
// import AuthProviders from './Providers/AuthProviders';

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  // <AuthProviders>

  <QueryClientProvider client={queryClient}>
    <div className='px-8'>

      <RouterProvider router={router} />

    </div>
  </QueryClientProvider>


  // </AuthProviders>
)
