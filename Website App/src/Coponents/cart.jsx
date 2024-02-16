const Cart = () => {
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

      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">My Cart</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        class="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                          class="w-100"
                          alt="Blue Jeans Jacket"
                        />
                        <a href="#!">
                          <div
                            class="mask"
                            style="background-color: rgba(251, 251, 251, 0.2)"
                          ></div>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Blue denim shirt</strong>
                      </p>
                      <p>Color: blue</p>
                      <p>Size: M</p>
                      <button
                        type="button"
                        class="btn btn-success btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div class="d-flex mb-4" style="max-width: 300px">
                        <button
                          class="btn btn-success px-3 me-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <i class="fas fa-minus"></i>
                        </button>

                        <div class="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            class="form-control"
                          />
                          <label class="form-label" for="form1">
                            Quantity
                          </label>
                        </div>

                        <button
                          class="btn btn-success px-3 ms-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>

                      <p class="text-start text-md-center">
                        <strong>$17.99</strong>
                      </p>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <div class="row">
                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        class="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                          class="w-100"
                        />
                        <a href="#!">
                          <div
                            class="mask"
                            style="background-color: rgba(251, 251, 251, 0.2)"
                          ></div>
                        </a>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Red hoodie</strong>
                      </p>
                      <p>Color: red</p>
                      <p>Size: M</p>

                      <button
                        type="button"
                        class="btn btn-success btn-sm me-1 mb-2"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div class="d-flex mb-4" style="max-width: 300px">
                        <button
                          class="btn btn-success px-3 me-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                        >
                          <i class="fas fa-minus"></i>
                        </button>

                        <div class="form-outline">
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                            class="form-control"
                          />
                          <label class="form-label" for="form1">
                            Quantity
                          </label>
                        </div>

                        <button
                          class="btn btn-success px-3 ms-2"
                          onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                      <p class="text-start text-md-center">
                        <strong>$17.99</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Apply Coupon</h5>
                </div>
                <div class="form-outline m-3">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg mt-2 mb-3"
                    placeholder="Enter Your Coupon"
                  />

                  <div class="text-center text-lg-start">
                    <button
                      type="button"
                      class="btn btn-success btn-lg"
                      style="padding-left: 2.5rem; padding-right: 2.5rem"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Total Cart</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Cart Subtotal
                      <span>$53.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Shpping
                      <span>$53.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      VAT
                      <span>$21</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Cart;
