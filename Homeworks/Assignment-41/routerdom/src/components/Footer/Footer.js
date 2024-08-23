import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="Footer">
        <Link to="/" className="fot-name">Home</Link>
        <Link to="/about" className="fot-name">About</Link>
        <Link to="/contact" className="fot-name">Contact</Link>
    </div>
  )
}

export default Footer