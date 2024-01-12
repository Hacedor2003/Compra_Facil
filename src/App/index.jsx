import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./Page/Profile/Profile";
import { DataProvider } from "../Data/Context/Context";
import { SearchPage } from "./Page/SearchPage/SearchPage";
import { NotFound } from "./Page/NotFound/Index";
import { NavBar } from "./Page/Layout/NavBar/NavBar";
import { Footer } from "./Page/Layout/Footer/Footer";
import { ProductPage } from "./Page/Product/Routes/ProductPage/ProductPage";
import { MiCarrito } from "./Page/Product/Routes/MiCarrito/MiCarrito";
import { ListaProductos } from "./Page/Product/Routes/ListaProductos/ListaProductos";
import { LoginForm } from "./Page/Login/LoginForm";


export const Index = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<ListaProductos />} />
                    <Route exact path="/user" element={<Profile />} />
                    <Route exact path="/Login" element={<LoginForm />} />
                    <Route exact path="/MiCarrito" element={<MiCarrito />} />
                    <Route
                        exact
                        path="/Search/:nameProduct"
                        element={<SearchPage />}
                    />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </DataProvider>
        </BrowserRouter>
    );
};
