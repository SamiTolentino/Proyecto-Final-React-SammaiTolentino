import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./_ItemDetail.scss";

const ItemDetail = ({ id, nameitem, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            name,
            price
        }

        addItem(item, quantity)
    }

    return (
        <div className="CardItemDetail">
            <div className="ImageContainer">
                <h2 className="ItemHeaderDetail">
                    {name}
                </h2>
                <picture>
                    <img src={img} alt={name} className="ItemImgDetail" />
                </picture>
            </div>
            <div className="DescriptionContainer">
                <section>
                    <p className="InfoCategory">
                        {nameitem}
                    </p>
                    <div className="InfoDescripcion">
                        <h2>Descripcion</h2>
                        <p>{description}</p>
                    </div>
                    <p className="InfoPrice">
                        Precio:$ {price}
                    </p>
                </section>
                <footer className="ItemFooterDetail">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="OptionDetail">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail;