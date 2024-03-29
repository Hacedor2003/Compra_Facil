import "./Estilos.css";
import { FaCartPlus } from "react-icons/fa6";
import PropTypes from "prop-types";

export const BtnAnadirAlCarrito = ({ rating, producto, watch }) => {
    const HandleClick = () => {
        let localCartData = localStorage.getItem("cart");
        if (localCartData) {
            localCartData = JSON.parse(localCartData);
            const existingProductIndex = localCartData.findIndex(
                (item) => item.products.id === producto.id
            );
            if (existingProductIndex !== -1) {
                localCartData[existingProductIndex].products.quantity += 1;
            } else {
                localCartData.push({
                    id: 2,
                    userId: 1,
                    products: {
                        ...producto,
                        quantity: 1,
                    },
                });
            }
        } else {
            localCartData = [
                {
                    id: 2,
                    userId: 1,
                    products: {
                        ...producto,
                        quantity: 1,
                    },
                },
            ];
        }
        localStorage.setItem("cart", JSON.stringify(localCartData));
    };

    return (
        <button id="btn" data-tooltip={"📦" + rating} onClick={HandleClick}>
            {watch ? <p>Añadir al carrito</p> : ""}
            <FaCartPlus />
        </button>
    );
};

BtnAnadirAlCarrito.propTypes = {
    rating: PropTypes.number.isRequired,
    producto: PropTypes.object.isRequired,
    watch: PropTypes.bool.isRequired,
};
