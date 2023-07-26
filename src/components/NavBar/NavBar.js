import { Navbar, Container, Nav, } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/Cartwidget';
import './_NavBar.scss';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand><Link to='/'>HyperTech Hardware</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div className='nav-button'>

                            <NavLink to={`/category/auriculares`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Auriculares</button></NavLink>
                            <NavLink to={`/category/camara web`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Camaras Webs</button></NavLink>
                            <NavLink to={`/category/mouse`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Mouses</button></NavLink>
                            <NavLink to={`/category/teclado`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><button>Teclados</button></NavLink>

                        </div>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;















































// const NavBar = () => {
//     return (
//         <nav>
//             <h3>HyperTech Hardware</h3>
//             <div>
//                 <button>Todos los productos</button>
//                 <button>Auriculares</button>
//                 <button>Sillas Gamer</button>
//                 <button>Micrófonos</button>
//                 <button>Mouses y Teclados</button>
//             </div>
//             <CartWidget />
//         </nav>
//     );
// }

// export default NavBar;