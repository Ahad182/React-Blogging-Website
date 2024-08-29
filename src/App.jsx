import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const router = createBrowserRouter([
  
  {
    
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'blogs',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '/blogs/:id',
        element: <Detail />,
        loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
      }
    ]
  }
]);

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
