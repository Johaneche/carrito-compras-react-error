import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Carrito</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link" aria-current="page">Productos</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to="/carrito" className="nav-link" aria-current="page">Carrito</Link>
                    </div>
                </div>
                <Link className='cart-icon' to="/carrito">
                    <Badge badgeContent={shoppingList.length} color="primary">
                        <ShoppingCart />
                    </Badge>
                </Link>
                
            </div>
        </nav>
    )
}
