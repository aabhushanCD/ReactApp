import Header from "./Header/nav";
import Footer from "./Footer/Footer";

const Login = () => {
  return (
    <>
      <Header></Header>

      <div className="container-fluid h-custom ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border m-4 p-4 rounded shadow">
            <form>
              <h1 className="d-flex justify-content-center align-items-center text-success mb-4">
                {"Login"}
              </h1>

              <div className="form-outline mb-4">
                <label className="form-label" for="form3Example3">
                  {"Email_address"}
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" for="form3Example4">
                  {"Password"}
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary m-1"
                      type="button"
                      id="password-toggle"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>

              <a
                href="forgetPass.html"
                className="text-body d-flex justify-content-end"
              >
                Forgot password?
              </a>
              <div className="form-check mb-0">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-success btn-lg w-100"
                  // style={"padding-left: 2.5rem; padding-right: 2.5rem;"}
                >
                  Login
                </button>

                <p className="small fw-bold mt-2 pt-1 mb-0 d-flex justify-content-center">
                  Don't have an account?{" "}
                  <a href="register.html" className="link-success">
                    Register
                  </a>
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <hr className="w-50" />
                Or
                <hr className="w-50" />
              </div>
              <p className="lead fw-normal m-1 d-flex justify-content-center">
                Sign in with
              </p>

              <div className="d-flex flex-row align-items-center justify-content-center align-items-center m-1">
                <button
                  type="button"
                  className="btn btn-success btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-success btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-success btn-floating mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Login;
