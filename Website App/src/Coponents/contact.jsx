import Header from "./Header/nav";
import Footer from "./Footer/Footer";
const Contact = () => {
  return (
    <>
      <Header></Header>
      <div
        class="modal fade bg-white"
        id="templatemo_search"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            class="modal-content modal-body border-0 p-0"
          >
            <div class="input-group mb-2">
              <input
                type="text"
                class="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                class="input-group-text bg-success text-light"
              >
                <i class="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="container-fluid bg-light py-5">
        <div class="col-md-6 m-auto text-center">
          <h1 class="h1">Contact Us</h1>
          <p>
            Proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div
        id="contact-details"
        class="container"
        // style="padding: 40px 0px"
      >
        <div class="row">
          <div class="col-md-6">
            <div class="details">
              <span>GET IN TOUCH</span>
              <h2>Visit one of our agency location or contact us</h2>
              <h3 class="p-2">Head Office</h3>
              <ul>
                <li class="d-flex gap-3">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <p>Itahari-4 Province-1 Koshi Sunsari</p>
                </li>
                <li class="d-flex gap-3">
                  <i class="fa-solid fa-envelope"></i>
                  <p>contact@gmail.com</p>
                </li>
                <li class="d-flex gap-3">
                  <i class="fa-solid fa-phone"></i>
                  <p>(+91) 9800000000</p>
                </li>
                <li class="d-flex gap-3">
                  <i class="fa-solid fa-clock"></i>
                  <p>Monday to Saturday 9:00 - 18:00</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.7090721847076!2d87.27490759756212!3d26.6540568350139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6c6ffd419ad7%3A0x3c19a0cb1869a764!2sSusma%20Koirala%20Memorial%20College!5e0!3m2!1sen!2snp!4v1706363881658!5m2!1sen!2snp"
                width="100%"
                height="450"
                // style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        id="form-details"
        class="container mb-5"
        // style="border: 1px solid grey; padding: 10px"
      >
        <div class="row">
          <div class="col-md-6">
            <form action="">
              <span>LEAVE A MESSAGE</span>
              <h2>We love to hear from You</h2>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="E-mail" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div class="col-md-6">
            <div class="people">
              <div>
                <img src="./assets/img/people/1.png" alt="" />
                <p>
                  <span>Jhon Doe</span>Senior Marketing Manager
                  <br />
                  Phone: +9000 0000 00 00
                  <br />
                  Email: contact@gmail.com
                </p>
              </div>
              <div>
                <img src="./assets/img/people/2.png" alt="" />
                <p>
                  <span>William Smith</span>Senior Marketing Manager
                  <br />
                  Phone: +9000 0000 00 00
                  <br />
                  Email: contact@gmail.com
                </p>
              </div>
              <div>
                <img src="./assets/img/people/3.png" alt="" />
                <p>
                  <span>Mary Kon</span>Senior Marketing Manager
                  <br />
                  Phone: +9000 0000 00 00
                  <br />
                  Email: contact@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Contact;
