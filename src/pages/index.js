import React from "react"
import Home from "./home"
import { Helmet } from "react-helmet"
export default function Main(props) {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="css/base.css" />
        <link rel="stylesheet" href="css/vendor.css" />
        <link rel="stylesheet" href="css/main.css" />

        <script src="js/modernizr.js"></script>
        <script src="js/pace.min.js"></script>
        <script src="https://kit.fontawesome.com/8fa88cd9e3.js"></script>
        <script src="js/jquery-2.1.3.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
      </Helmet>
      <Home />
    </div>
  )
}
