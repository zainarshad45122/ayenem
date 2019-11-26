import React, { Component } from "react"
class AboutUs extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <section id="about">

		<div className="row about-wrap">
			<div className="col-full">

				<div className="about-profile-bg"></div>

				<div className="intro">
					<h3 className="animate-this">About Us</h3>
					<p className="lead animate-this"><span>Ayenem</span> is a team of expert technology practitioners, who
						live and breathe DevOps automation, Security and Cloud</p>
				</div>

			</div> 
		</div> 

	</section> 
   
    
    )
  }
}
export default AboutUs;
