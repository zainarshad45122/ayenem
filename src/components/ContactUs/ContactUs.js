import React, { Component } from "react"


class ContactUs extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return ( 
        <section id="contact">

		<div className="overlay"></div>

		<div className="row narrow section-intro with-bottom-sep animate-this">
			<div class="col-twelve">
				<h3>Contact</h3>
				<h1>Get In Touch.</h1>

				<p class="lead">Get in touch if you'd like to discuss a project or an overview of our credentials and
					relevant case studies.</p>
			</div>
		</div> 

		<div class="row contact-content">

			<div class="col-four tab-full contact-info end animate-this">

				<h5>Contact Information</h5>

				<div class="cinfo">
					<h6>Where to Find Us</h6>
					<p>
						383 George Street<br/>
						Sydney, NSW<br/>
						2000 Australia
					</p>
				</div> 
				<div class="cinfo">
					<h6>Email Us At</h6>
					<p>
						hello@ayenem.com.au<br/>
					</p>
				</div> 

			</div>

		</div> 

	</section> 
    )
  }
}
export default ContactUs;
