import { useContext } from "react"
import { NavBarComponent } from "../components/NavBarComponent"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"

export const ProductsPage = () => {

    const { products } = useContext(ProductContext)
    const { addProduct, removeProduct } = useContext(CartContext)


    return (
        <div>
            <NavBarComponent/>
            <h1> Productos</h1>
            <hr />
            {products.map(product => (
                <CardComponent
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    handlerAdd={ () => addProduct(product)}
                    handlerRemove={ () => removeProduct(product.id)}

                />
            ))}
        </div>
    )
}
