import React, { useContext } from 'react'
import { BiSolidContact } from 'react-icons/Bi'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../main'

export default function MyFooter() {
    const {contextData} =useContext(GlobalContext)
    return (
        <footer className="bg-dark text-light" data-bs-theme="dark">
            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <img src="https://img.freepik.com/free-vector/cosmetic-wreath-design-with-eyelash-curler-eyeliner-brush_83728-1850.jpg?w=2000" alt="" width={90} className="mb-3" />
                        <p className="font-italic text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt.
                        </p>
                        <ul className="list-inline mt-4">
                            <li className="list-inline-item">
                                {/* <Link to="/terms">terms</Link> */}
                                {/* <a href="#" target="_blank" title="twitter"> */}
                                    <i className="fa fa-twitter" />
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="facebook">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="instagram">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a title="contectInfo"><BiSolidContact size={30}/><span>{contextData.username}</span>
                                    {/* <i className="fa fa-pinterest" /> */}
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" target="_blank" title="vimeo">
                                    <i className="fa fa-vimeo" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    For Women
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    For Men
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Stores
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Our Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Login
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Register
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Wishlist
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-muted">
                                    Our Products
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                        <p className="text-muted mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
                            temporibus.
                        </p>
                        <div className="p-1 rounded border">
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    aria-describedby="button-addon1"
                                    className="form-control border-0 shadow-0"
                                />
                                <div className="input-group-append">
                                    <button id="button-addon1" type="submit" className="btn btn-link">
                                        <i className="fa fa-paper-plane" />
                                    </button>
                                    {/* <input placeholder="Username" type="text" name="text" class="input">hy</input> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyrights */}
            <div className="bg-light py-4">
                <div className="container text-center">
                    <p className="text-muted mb-0 py-2">
                        © 2019 Bootstrapious All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}
