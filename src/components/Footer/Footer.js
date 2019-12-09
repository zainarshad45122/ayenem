import React, { Component } from "react"


class Footer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return ( 
      
      <span>
        <footer>
            <div class="footer-bottom">
    
                <div class="row">
    
                    <div class="col-twelve">
                        <div class="copyright">
                            <span>© ayenem 2019.</span>
                        </div>
                    </div>
    
                </div>
    
            </div> 
    
            <div id="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top">
                    <i class="fa fa-long-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
        <script src="js/jquery-2.1.3.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
      
        </span>

    )
  }
}
export default Footer;
