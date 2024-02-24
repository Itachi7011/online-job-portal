import React from "react";
import { Link } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';


export default function Footer() {
  return (<>

    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      {/* <!-- Section: Social media --> */}
      <section
        className="d-flex justify-content-between p-1"
        style={{ backgroundColor: "#6351ce" }}
      >
        {/* <!-- Left --> */}
        <div className="me-1">
          
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section className="footersection">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            
            <div className="col-md-auto col-lg-auto  col-xl-auto mx-auto text-md-start mb-4 productscss">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Services</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "130px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p>
                <Link to="/Feedback" className="text-white">Feedback</Link>
              </p>
              <p>
                <Link to="/JobSearch" className="text-white">Search Jobs</Link>
              </p>

              <p>
                <Link to="/EmployeeSearch" className="text-white">Search Employee</Link>
              </p>

            </div>
            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Stay Connected</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "200px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <a href="/" className="text-white mr-3">Instagram</a>
              <a href="/" className="text-white mr-3">Twitter</a>
              <a href="/" className="text-white mr-3">Youtube</a>
              <a href="/" className="text-white mr-3">Facebook</a>
            </div>
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "120px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p><i className="fas fa-home mr-3"></i> New Delhi, India</p>
              <p><i className="fas fa-envelope mr-3"></i> Online Jobs search</p>
              <p><i className="fas fa-phone mr-3"></i> +91 7011320816</p>
              <p><i className="fas fa-print mr-3"></i> +91 8750301801 </p>
              <p><i className="fas fa-print mr-3"></i> jobportal@gmail.com</p>
              <p><i className="fas fa-print mr-3"></i> jobportalindia@gmail.com</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright : SHIVAM, 196388680, IGNOU (BCA)
        
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    {/* <!-- Footer --> */}


    {/* <!-- End of .container --> */}
  </>)
}