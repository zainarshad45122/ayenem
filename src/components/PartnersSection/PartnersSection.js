import React, { Component } from "react"


class PartnersSection extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return ( 
      
        <section id="partners">

		<div class="about-wrap">

			<div class="row with-bottom-sep animate-this">
				<div class="col-twelve">
					<h3>Our Partners</h3>
				</div>

				<div class="partner-logo-container">
					<div class="partner-logo-item"><img src="/images/partners/aws.png" alt="Amazon Web Services" />
					</div>
					<div class="partner-logo-item hashi"><img src="/images/partners/hashicorp.png" alt="Hashi Corp" />
					</div>
				</div>
				<div class="partner-logo-container">
					<div class="partner-logo-item"><img src="/images/partners/dvuln.png" alt="DVULN" /></div>
					<div class="partner-logo-item"><img src="/images/partners/aqua.png" alt="Aqua" /></div>
					<div class="partner-logo-item datadog"><img src="/images/partners/datadog.png" alt="DataDog" />
					</div>
				</div>
			</div> 

		</div> 
	</section> 

    )
  }
}
export default PartnersSection;
