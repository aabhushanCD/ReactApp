const Register = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
          <a
            class="navbar-brand text-success logo h1 align-self-center"
            href="index.html"
          >
            LOGO
          </a>

          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div class="flex-fill">
              <ul
                class="nav navbar-nav d-flex justify-content-between mx-lg-auto"
                style="padding: 0px 50px"
              >
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="shop.html">
                    Shop
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="navbar align-self-center d-flex">
              <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3"></div>
              <a
                class="nav-icon d-none d-lg-inline"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i class="fa fa-fw fa-search text-dark mr-2"></i>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="cart.html"
              >
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </a>
              <a
                class="nav-icon position-relative text-decoration-none"
                href="login.html"
              >
                <i class="fa fa-fw fa-user text-dark mr-3"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  +99
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border m-4 p-4 rounded shadow">
            <form>
              <h1 class="d-flex justify-content-center align-items-center text-success mb-4">
                Register
              </h1>

              <div class="form-outline mb-3">
                <label class="form-label" for="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  placeholder="Enter first name"
                />
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="middleName">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  class="form-control"
                  placeholder="Enter middle name"
                />
              </div>
              <div class="form-outline mb-3">
                <label class="form-label" for="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  class="form-control"
                  placeholder="Enter last name"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Enter email address"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="mobileNo">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNo"
                  class="form-control"
                  placeholder="Enter mobile number"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="password">
                  Password
                </label>
                <div class="input-group">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary m-1"
                      type="button"
                      id="password-toggle"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="confirmPassword">
                  Confirm Password
                </label>
                <div class="input-group">
                  <input
                    type="password"
                    id="form3Example5"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary m-1"
                      type="button"
                      id="password-toggle1"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-check m-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label class="form-check-label" for="form2Example3">
                  I agree all the terms and conditions.
                </label>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-success btn-lg w-100"
                  style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Register
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0 d-flex justify-content-center">
                  Already have an account?{" "}
                  <a href="login.html" class="link-success">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>

        <footer class="bg-dark" id="tempaltemo_footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3 pt-5">
                <h2 class="h2 text-success border-bottom pb-3 border-light logo">
                  My Shop
                </h2>
                <ul class="list-unstyled text-light footer-link-list">
                  <li>
                    <i class="fas fa-map-marker-alt fa-fw"></i>
                    123 Consectetur at ligula 10660
                  </li>
                  <li>
                    <i class="fa fa-phone fa-fw"></i>
                    <a class="text-decoration-none" href="tel:010-020-0340">
                      010-020-0340
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope fa-fw"></i>
                    <a
                      class="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@company.com
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 pt-5">
                <h2 class="h2 text-light border-bottom pb-3 border-light">
                  Products
                </h2>
                <ul class="list-unstyled text-light footer-link-list">
                  <li>
                    <a class="text-decoration-none" href="#">
                      Clothes
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Shoes
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Grocery
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Home Appliances
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Electronics
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 pt-5">
                <h2 class="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul class="list-unstyled text-light footer-link-list">
                  <li>
                    <a class="text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Shop Locations
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 pt-5">
                <h2 class="h2 text-light border-bottom pb-3 border-light">
                  Payment Partner
                </h2>
                <a href="https://esewa.com.np" target="_blank">
                  <img
                    src="./assets/img/esewa.png"
                    alt=""
                    width="300px"
                    height="150px"
                  />
                </a>
              </div>
            </div>

            <div class="row text-light mb-4">
              <div class="col-12 mb-3">
                <div class="w-100 my-3 border-top border-light"></div>
              </div>
              <div class="col-auto me-auto">
                <ul class="list-inline text-left footer-icons">
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="http://facebook.com/"
                    >
                      <i class="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <i class="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://twitter.com/"
                    >
                      <i class="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li class="list-inline-item border border-light rounded-circle text-center">
                    <a
                      class="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/"
                    >
                      <i class="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <label class="sr-only" for="subscribeEmail">
                  Email address
                </label>
                <div class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control border-light"
                    id="subscribeEmail"
                    placeholder="Email address"
                  />
                  <div class="input-group-text btn-success text-light">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 bg-black py-3">
            <div class="container d-flex justify-content-center align-items-center">
              <div class="row pt-2">
                <div class="col-12">
                  <p class="text-left text-light">
                    Copyright &copy; 2024 Company Name | Designed by Aakash
                    Shrestha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Register;
