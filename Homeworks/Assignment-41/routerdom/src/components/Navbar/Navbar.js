import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
        <Link to="/" className="nav-name">Home</Link>
        <Link to="/about" className="nav-name">About</Link>
        <Link to="/contact" className="nav-name">Contact</Link>
    </div>
  )
}

export default Navbar