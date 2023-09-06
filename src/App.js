import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';

//Layouts
import ContainerRoot from './Layouts/ContainerRoot';
import HelpRoot from "./Layouts/HelpRoot";
import ProductRoot from "./Layouts/ProductRoot";

//pages
import Home from './Pages/Home';
import About from './Pages/About';
import NotPageFound from './Pages/NotPageFound';
import Fqa from "./Pages/help/Fqa";
import Contact, { contactAction } from './Pages/help/Contact';
import ProductList, { cardLoader } from './Pages/products/ProductList';
import ProductDetail, { productDetailLoader } from './Pages/products/ProductDetail';
import ProductError from './Pages/products/ProductError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ContainerRoot />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* help */}
      <Route path="help" element={<HelpRoot />}>
        <Route path="fqa" element={<Fqa />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      {/* products */}
      <Route
        path="products"
        element={<ProductRoot />}
        errorElement={<ProductError />}
      >
        <Route index element={<ProductList />} loader={cardLoader} />
        <Route
          path=":id"
          element={<ProductDetail />}
          loader={productDetailLoader}
        />
      </Route>

      {/* page not found */}
      <Route path="*" element={<NotPageFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
