import React, {useState} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import apple from './apple.png';
import produce from './food.png';
import '../Main.css';


export default () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [home, setHome] = useState(false);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [order, setOrder] = useState(false);
    const [small, setSmall] = useState(false);
    const [large, setLarge] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(true)

    const placeNewOrder = () =>{
        setOrder(true);
        setHome(false);
        setLarge(false);
        setSmall(false);
        setUserInfo(false);
        setOrderCompleted(false);
    }

    const smallSelected = () =>{
        setOrder(false);
        setHome(false);
        setLarge(false);
        setSmall(true);
        setUserInfo(false);
        setOrderCompleted(false);
    }

    const largeSelected = () =>{
        setOrder(false);
        setHome(false);
        setSmall(false);
        setLarge(true);
        setUserInfo(false);
        setOrderCompleted(false);
    }

    const goHome = () =>{
        setHome(true);
        setOrder(false);
        setSmall(false);
        setLarge(false);
        setUserInfo(false);
        setOrderCompleted(false);
    }

    const submitOrder = () =>{
        setHome(false);
        setOrder(false);
        setSmall(false);
        setLarge(false);
        setUserInfo(true);
        setOrderCompleted(false);
    }

    const orderPlaced = () =>{
        setHome(false);
        setOrder(false);
        setSmall(false);
        setLarge(false);
        setUserInfo(false);
        setOrderCompleted(true);
    }


    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="#" onClick={goHome}><h2>Fresh Grocery Store</h2></NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><h4>&#8226;</h4></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={goHome}><h4>Home</h4></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><h4>&#8226;</h4></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => setModal(!modal)}><h4>About Us</h4></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><h4>&#8226;</h4></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={placeNewOrder}><h4>Place New Order</h4></NavLink>
                    </NavItem>
                </Nav>
                <NavbarText> <h4> <span className="mr-2">Your Local Farm</span> <img src={apple} alt="apple" height="75px"/></h4></NavbarText>
                </Collapse>
            </Navbar>


            {/* Main Home Tab and landing page*/}
            {home &&
                <div className="col-sm-10 offset-sm-1 text-center home">
                    <div className="welcome mt-5">
                        <h2>Welcome to the Fresh Grocery Store Online Delivery Application</h2>
                        <h5>Why go to the store when the store can come to you!</h5>
                    </div>
                    <div className="col-sm-10 offset-1 homeInfo mt-5">
                        <p style={{fontSize: '20px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. 
                            Dictumst quisque sagittis purus sit. Sed pulvinar proin gravida hendrerit lectus a. Risus sed vulputate odio ut enim blandit volutpat. 
                            At in tellus integer feugiat scelerisque varius. Amet venenatis urna cursus eget nunc. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. 
                            Et netus et malesuada fames ac turpis egestas. Varius vel pharetra vel turpis nunc eget lorem. Etiam dignissim diam quis enim lobortis scelerisque. 
                            Duis ultricies lacus sed turpis tincidunt id aliquet risus. Suspendisse ultrices gravida dictum fusce. Metus vulputate eu scelerisque felis imperdiet. 
                            Diam vel quam elementum pulvinar. Blandit aliquam etiam erat velit scelerisque. Sed elementum tempus egestas sed sed risus pretium.
                        </p>
                    </div>
                    <div className='text-center placeOrder mt-5'>
                        <button className='btn btn-success btn-lg' onClick={placeNewOrder}>Place an Oder Now!</button>
                    </div>
                </div>
            }

            {/* Customer order process */}
            {order &&
                <div className="col-sm-10 offset-sm-1 text-center placeOrder">
                    <div className='orderSize mt-5 text-center'>
                        <h3>What Size Order Would You Like?</h3>
                        <div className='flex text-center mt-5 mb-5'>
                            <button className='btn btn-primary btn-lg mr-2' onClick={smallSelected}>Small Box</button>
                            <button className='btn btn-success btn-lg' onClick={largeSelected}>Large Box</button>
                        </div>
                        <hr/>
                        <div className='disc mt-5'>
                            <h5>Small Box = Consist of 7 items of your choosing</h5>
                            <br/>
                            <h5>Large Box = Consist of 10 items of your choosing</h5>
                        </div>
                    </div>
                </div>
            }

            {small &&
                <div className="col-sm-10 offset-sm-1 text-center">
                    <div className='smallOrder mt-5 text-center'>
                        <h3>Small Order</h3>
                        <h3>Select Up to 7 Items Then Click: <button className='btn btn-primary btn-lg' onClick={submitOrder}>Submit Order</button></h3>
                        <button className='btn btn-info mt-3' onClick={() => setModal2(!modal2)}>Add Meats or Dairy to Order</button>
                        <div className='selections text-center'>
                            <div className='flex text-center mt-2'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                            <div className='flex text-center mt-5'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                            <div className='flex text-center mt-5'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {large &&
                <div className="col-sm-10 offset-sm-1 text-center">
                    <div className='largeOrder mt-5 text-center'>
                        <h3>Large Order</h3>
                        <h3>Select Up to 10 Items Then Click: <button className='btn btn-primary btn-lg' onClick={submitOrder}>Submit Order</button></h3>
                        <button className='btn btn-info mt-3' onClick={() => setModal2(!modal2)}>Add Meats or Dairy to Order</button>
                        <div className='selections text-center'>
                            <div className='flex text-center mt-5'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                            <div className='flex text-center mt-5'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                            <div className='flex text-center mt-5'>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                                <img src={produce} alt="food_item" height='150px' className='item'/>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {userInfo &&
                <div className="col-sm-10 offset-sm-1 text-center userInfo">
                    <div className='userForm mt-5 text-center'>
                        <h4 style={{textDecoration:'underline'}}>Enter Your Information For Delivery</h4>
                        <form className='text-center'>
                            <div className='col-sm-4 offset-sm-4 form-group mt-5'>
                                <input type="text" placeholder='First Name' className='form-control'/>
                                <input type="text" placeholder='Last Name' className='form-control mt-3'/>
                                <input type="text" placeholder='Phone Number' className='form-control mt-3'/>
                                <textarea placeholder='Delivery Address' className='form-control mt-3'/>
                            </div>
                            <button className='btn btn-primary btn-lg mt-5' onClick={orderPlaced}>Place Order</button>
                        </form>
                        <h5 className='mt-5'>Please Note That Someone Will Contact You to Confirm and Arrange Payment For Your Order</h5>
                    </div>
                </div>
            }

            {orderCompleted &&
                <div className='col-sm-10 offset-sm-1 text-center userInfo'>
                    <div className='mt-5 text-center'>
                        <h1>Great! Your Order Was Placed Successfully!</h1>
                        <br/>
                        <h4>Someone Will Be in Contact With You Shortly</h4>
                        <br/>
                        <button className='btn btn-success btn-lg mt-5' onClick={goHome}>Return Home</button>
                    </div>
                </div>

            }

            <footer class="page-footer">
                <div class="footer-copyright text-center py-3">©2021 Fresh Grocery Store -
                    <a href="#"> FreshGroceryStore.com </a>
                </div>
            </footer>

        {/* About Us Modal */}
            <div>
                <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalHeader toggle={() => setModal(!modal)}>Our Story</ModalHeader>
                        <ModalBody>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => setModal(!modal)}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        {/* Meat/Dairy Modal */}
            <div>
                <Modal isOpen={modal2} toggle={() => setModal2(!modal2)}>
                    <ModalHeader toggle={() => setModal(!modal2)}>Select From Our Available Meats & Dairy Items</ModalHeader>
                        <ModalBody className='text-center mt-5 mb-5'>
                            <h5>This would show available meats and dairy items available in your local area to be added to your order</h5>
                            <button className='btn btn-info mt-5' onClick={() => setModal2(!modal2)}>Add Selected Items</button>
                        </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => setModal2(!modal2)}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        </div>
    )
}