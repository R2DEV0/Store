import React, {useState} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import apple from './apple.png';
import produce from './food.png';
import heart from './heart.png';
import '../Main.css';


export default () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [home, setHome] = useState(true);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [order, setOrder] = useState(false);
    const [small, setSmall] = useState(false);
    const [large, setLarge] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [orderCompleted, setOrderCompleted] = useState(false)

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
                    <div className='hearts'>
                        <img src={heart} alt="food hearts" height="150px" className='mt-3'/>
                    </div>
                    <div className="col-sm-10 offset-sm-1 text-center homeInfo mt-4">
                        <p style={{fontSize: '20px'}} className='text-center'>
                            This is the high-fidelity prototype of our grocery store application. The user can interact with the tabs within the top navigation bar and click on the 'About Us' tab 
                            to view more about us and our story. The user can also place an order from the navigation bar as well. From anywhere in the application, the user can always go to the homepage by selecting 'Home'.
                            The large green button below these paragraphs can also be clicked on to start a new order.
                            </p>
                            <p style={{fontSize: '20px'}} className='text-center'>
                            Start an order by clicking the button below. Next, select the order size you would like to make. After that, you will be directed to our available items. 
                            Select what you would like delivered to your address and click submit. You will then need to enter your infromation and that is it! 
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
                            <h5>Small Box = Consists of 7 items of your choosing</h5>
                            <br/>
                            <h5>Large Box = Consists of 10 items of your choosing</h5>
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
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $1.00
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.75
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $1.00
                                    </p>
                                </div>
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
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $1.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.00
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.25
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $4.75
                                    </p>
                                </div>
                            </div>
                            <div className='text-center mt-2 items'>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $2.00
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $2.75
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $3.50
                                    </p>
                                </div>
                                <div>
                                    <img src={produce} alt="food_item" height='150px' className='item'/>
                                    <p>Food Item Description<br/>
                                        $5.00
                                    </p>
                                </div>
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
                        <div className='text-center' style={{fontWeight:'bold'}}>
                            <p>Online Grocery Store Delivery Service<br/>
                            CS 302: Human Computer Interaction <br/>
                            Winter 2021 </p>
                            <p>Instructor: Deanne Larson<br/>
                            City University of Seattle<br/>
                            Matthew Lynch - Kevin Chancey - Kiran Limbu </p>
                        </div>
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