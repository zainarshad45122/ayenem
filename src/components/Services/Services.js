import React, { Component } from "react"
class Services extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <section id="services">


		<div className="gradient-overlay"></div>

		<div className="row narrow section-intro with-bottom-sep animate-this">
			<div className="col-full">

				<h3>Services</h3>
				<h1>What We Do.</h1>

				<p className="lead">We work alongside our clients to deliver real value to their business.<br/>
					We strive to provide exceptional service and uncompromising excellence in our delivery.</p>

			</div> 
		</div> 

		<div className="row services-content">

			<div className="services-list block-1-2 block-tab-full group">

				<div className="bgrid service-item animate-this">

					<span className="icon"><i className="fas fa-laptop-code"></i></span>

					<div className="service-content">
						<h3 className="h05">DevSecOps</h3>

						<p>Putting the Sec in DevOps, we automate and blend the best of both worlds, shifting security
							to the left so you can focus on your business, nothing else.</p>
					</div>

				</div> 

				<div className="bgrid service-item animate-this">

					<span className="icon"><i className="fas fa-cloud-sun"></i></span>

					<div className="service-content">
						<h3 className="h05">Cloud Security</h3>
						<p>Offensive/defensive and app architecture experience combined. Make sure your cloud is secure.
							We transform enterprises to leverage the cloud.
						</p>
					</div>

				</div> 

				<div className="bgrid service-item animate-this">

					<span className="icon"><i className="fas fa-box-open"></i></span>

					<div className="service-content">
						<h3 className="h05">Container Security</h3>

						<p>Early adopters of container technology in production, we embed and ensure security is handled
							at every stage of delivery - including post deployment.</p>
					</div>

				</div> 

				<div className="bgrid service-item animate-this">

					<span className="icon"><i className="fas fa-concierge-bell"></i></span>

					<div className="service-content">
						<h3 className="h05">Managed DevOps Services</h3>

						<p>We take control, so you can take a step back and make technology work for you. Lean on our
							first className engineering consultants and gain an edge over the competition.
						</p>
					</div>

				</div> 

			</div> 
		</div> 

	</section>
       
    
    )
  }
}
export default Services
