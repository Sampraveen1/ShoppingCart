import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import MainLayout from './MainLayout';
import Man from './Man';
import Women from './Women';
import Kids from './Kids';
import Glassess from './Glassess';
import CustomShowPage from '../CustomComponents/CustomShowPage';
import CustomShoppingCart from '../CustomComponents/CustomShoppingCart';
import CustomLikePage from './LikePage';
import Login from './Login';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Navigate to="/layout/mainPage" />} />
      <Route path="layout" element={<MainLayout />}>
        <Route path="mainPage" element={<MainPage />} />
        <Route path="man" element={<Man />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="glassess" element={<Glassess />} />
        <Route path="product-details" element={<CustomShowPage />} />
        <Route path="shoppingCart" element={<CustomShoppingCart />} />
        <Route path="like-page" element={<CustomLikePage />} />
      </Route>
    </Routes>
  )
}

export default Router;