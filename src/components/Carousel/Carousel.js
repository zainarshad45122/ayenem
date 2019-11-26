import React, { Component } from "react"
class Carousel extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <section id="home">

		<div className="overlay"></div>

		<div className="home-content-table">
			<div className="home-content-tablecell">
				<div className="row">
					<div className="col-twelve">

						<h3 className="animate-intro">We Are ayenem.</h3>
						<h1 className="animate-intro">
							Enabling your goals sooner<br/>
						</h1>

						<div className="more animate-intro">
							<a className="smoothscroll button stroke" href="#about">
								Learn More
							</a>
						</div>

					</div> 
				</div> 
			</div> 
		</div>

		<div className="scrolldown">
			<a href="#about" className="scroll-icon smoothscroll">
				Scroll Down
				<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
			</a>
		</div>

	</section> 

   
    
    )
  }
}
export default Carousel;
