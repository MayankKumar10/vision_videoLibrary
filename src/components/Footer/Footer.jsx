import React from "react";
import "../../styles/root.css";

export function Footer() {
	return (
		<>
			<footer className="col-12 ">
				<div className="footer-container-main">
					<div className="footer-container">
						<div className="section-one">
							<span>
								<img src="" alt="" />
								<h5>
									Always here to help you
								</h5>
							</span>

							<div className="intro-and-links">
								<h5>
									All Rights are reserved
								</h5>
								<h5>
									Made with{" "}
									<i className="material-icons footerIcon">
										favorites
									</i>{" "}
									by Mayank Kumar{" "}
								</h5>
							</div>
						</div>
					</div>

					<div className="section-two">
						<h5>Category</h5>
						<h6>
							<a href="">product1</a>
						</h6>
						<h6>
							<a href="">product1</a>
						</h6>
						<h6>
							<a href="">product1</a>
						</h6>
						<h6>
							<a href="">product1</a>
						</h6>
						<h6>
							<a href="">product1</a>
						</h6>
					</div>

					<div className="section-three">
						<h5>Account</h5>
						<h6>
							<a href="">My Account</a>
						</h6>
						<h6>
							<a href="">Cart View</a>
						</h6>
						<h6>
							<a href="">Whish List</a>
						</h6>
						<h6>
							<a href="">Track Order</a>
						</h6>
						<h6>
							<a href="">Privacy Policy</a>
						</h6>
					</div>

					<div className="section-four">
						<h5>ABOUT</h5>
						<h6>
							<a href="">Contact Us</a>
						</h6>
						<h6>
							<a href="">About Us</a>
						</h6>
						<h6>
							<a href="">Press</a>
						</h6>
						<h6>
							<a href="">
								Corporate Information
							</a>
						</h6>
					</div>

					<div className="section-five">
						<h5>HELP</h5>
						<h6>
							<a href="">Payments</a>
						</h6>
						<h6>
							<a href="">Shipping</a>
						</h6>
						<h6>
							<a href="">
								Cancellation & Returns
							</a>
						</h6>
						<h6>
							<a href="">FAQ</a>
						</h6>
					</div>

					<div className="section-six">
						<p className="footer-address">
							Address: Dwarka, New
							Delhi-110078
						</p>
						<p className="footer-address">
							<span>Call US:</span>
							1800 000 0000
						</p>
						<p className="footer-address">
							<span>Email</span>
							mayankkumark28@gmail.com
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
