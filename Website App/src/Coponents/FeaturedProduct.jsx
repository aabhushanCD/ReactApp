import FeaturedProductCart from "./FeaturedProductsCart";
const FeaturedProduct = () => {
  return (
    <>
      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div class="row">
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
            <FeaturedProductCart></FeaturedProductCart>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedProduct;
