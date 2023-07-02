import { createContext, useState } from "react"

const CartContex = createContext([])


const CartProvider = ({ children }) => {

  const [listaDelCarrito, setListaDelCarrito] = useState([])

  const [cantidad, setCantidad] = useState(0)


  const addProduct = (producto, cantidad) => {

    if (isInCart(producto.id)) { setListaDelCarrito(listaDelCarrito.map
      
      (itemDeListado => {return itemDeListado.id === producto.id ? { ...itemDeListado,cantidad: itemDeListado.cantidad + cantidad } : itemDeListado}));

      

  }else{

    setListaDelCarrito([...listaDelCarrito,{...producto,cantidad}])
  }

}


/*

  const addProduct = (producto, cantidad) => {

    if (listaDelCarrito.find((x) => x.id === producto.id)) {
      return console.log("YA AGREGARDP");
    }

    setListaDelCarrito([...listaDelCarrito, producto])

    setCantidad(cantidad)

    console.log(listaDelCarrito);

    // console.log(producto);
    //console.log(cantidad);


  }

 */

 // const limpiarListadoDelCarrito = () => setListaDelCarrito([]);

  const isInCart = (id) => listaDelCarrito.find((x) => x.id === id) ? true : false;

  //const eliminarProducto = (id) => { setListaDelCarrito(listaDelCarrito.filter((x) => x.id !== id)) };

console.log(listaDelCarrito);

  return (

    <CartContex.Provider value={{ addProduct, listaDelCarrito, cantidad,isInCart }}>
      {children}
    </CartContex.Provider>

  )


  

  

  





 


}

export { CartProvider, CartContex }