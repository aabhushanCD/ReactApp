import React from "react";
import bannerImg1 from "../assets/img/banner_img_01.jpg";
import bannerImg2 from "../assets/img/banner_img_02.jpg";
import bannerImg3 from "../assets/img/banner_img_03.jpg";

const HomeSlider = () => {
  return (
    <>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            action=""
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        id="template-mo-my-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#template-mo-my-hero-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#template-mo-my-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-my-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={bannerImg1} alt="Banner 1" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>MY</b> eCommerce
                    </h1>
                    <h3 className="h2">Lorem ipsum dolor sit.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim possimus error neque soluta, voluptates repellendus
                      molestias maiores consequatur tempore, illum animi fugit
                      aliquam? Quo commodi obcaecati, similique fugiat cumque
                      ex!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={bannerImg2} alt="Banner 2" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Hello</h1>
                    <h3 className="h2">Lorem ipsum dolor sit.</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consequatur, commodi? Error magni, quibusdam beatae itaque
                      similique deleniti deserunt iure a mollitia? Quisquam
                      modi, molestiae provident omnis deleniti saepe asperiores
                      nemo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={bannerImg3} alt="Banner 3" />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Hello</h1>
                    <h3 className="h2">Lorem ipsum dolor sit.</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis quia ea quibusdam id optio adipisci repellat
                      explicabo laborum at asperiores? Explicabo excepturi
                      tempora officia harum sapiente ratione corrupti quisquam
                      consequuntur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-my-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-my-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </>
  );
};

export default HomeSlider;
