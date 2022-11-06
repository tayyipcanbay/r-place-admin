import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/sidebar.css";

function Sidebar(){
    return (
        <>
            <Navbar bg="dark" variant="dark" className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <Nav className="flex-column">
                        <div className='nav-box'>
                        <Nav.Link href="#/dashboard">Events</Nav.Link>

                        </div>
                        <div className='nav-box'>
                        <Nav.Link href="#/orders">Attendees</Nav.Link>
                        </div>
                        <div className='nav-box'>
                        <Nav.Link href="#/products">Canvas</Nav.Link>

                        </div>
                        <div className='nav-box'>
                        <Nav.Link href="#/customers">Moderators</Nav.Link>

                        </div>
                    </Nav>
                </div>
            </Navbar>
        </>
    )
}
export default Sidebar;