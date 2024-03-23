import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Header = () => {
    const networkStatus = useOnline();
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-warning">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link">Internet : {networkStatus ? "🟢" : "🔴"}</div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/franchise">Partner with us</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search"/>
                            <button className="btn btn-primary" type="button">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
}
export default Header
