// import { useEffect, useState } from "react";

// const ItemCount = ({ stock }) => {
//   const [items, setItems] = useState(1);
//   const [itemStock, setItemStock] = useState(stock);
//   const incrementarStock = () => {
//     if (items < itemStock) {
//       setItems(items + 1);
//     }
//   };
//   const decrementarStock = () => {
//     if (items > 1) {
//       setItems(items - 1);
//     }
//   };
//   const onAdd = () => {
//     if (items <= itemStock) {
//       setItemStock(itemStock - items);
//       setItems(1);
//     }
//   };
//   useEffect(() => {
//     setItemStock(stock);
//   }, [stock]);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <div className="btn-group" role="group" aria-label="Basic example">
//             <button
//               type="button"
//               className="btn menos"
//               onClick={decrementarStock}>
//             -
//             </button>
//             <button type="button" className="btn">
//               {items}
//             </button>
//             <button
//               type="button"
//               className="btn btn-mas"
//               onClick={incrementarStock}>
//             +
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <button
//             type="button"
//             className="btn btn-agregar-carrito"
//             onClick={onAdd}>
//             Agregar al Carrito
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCount;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-light">Finalizar Compra</Link> : <button type="button" className="btn btn-light" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>        
    )
}

export default ItemCount;
