import Footer from "./Footer/Footer";
import Header from "./Header/nav";

const About = () => {
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

      <section class="bg-success py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img
                src="./features/aboutUs.png"
                alt=""
                class="img-fluid"
                // style="mix-blend-mode: color-burn"
              />
            </div>
            <div class="col-md-6">
              <h2>Who We Are?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                non eaque sed voluptatibus culpa corporis nostrum nobis
                voluptate placeat excepturi impedit dolorem minima commodi
                facere exercitationem voluptatum aperiam dicta esse! Delectus,
                consequatur quae nisi voluptate nostrum corporis velit minus qui
                provident magni voluptatem, deleniti nam veniam corrupti quasi
                similique non.
              </p>
              <p>
                <abbr title="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur harum ratione quod ad eius repellat.
                </abbr>
              </p>
              <br />
              <br />
              <div class="bg-light">
                <marquee behavior="scroll" direction="left" scrollamount="5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, odit?
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container py-5">
        <div class="row text-center pt-5 pb-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Our Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f1.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">Free Shipping</h2>
            </div>
          </div>

          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f2.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">Online Order</h2>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f3.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">Save Money</h2>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f4.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">Promotions</h2>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f5.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">Happy Sell</h2>
            </div>
          </div>
          <div class="col-md-6 col-lg-2 pb-5">
            <div class="h-100 py-5 services-icon-wap shadow">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./features/f6.png" alt="" />
              </div>

              <h2 class="h5 mt-4 text-center">F24/7 Support</h2>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};
export default About;
