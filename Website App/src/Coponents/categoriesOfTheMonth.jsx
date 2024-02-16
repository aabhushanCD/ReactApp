import CategoriesCart from "./categoriesOfTheMonthCarts";

const CategoriesOfTheMonth = () => {
  return (
    <>
      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="row">
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
          <CategoriesCart></CategoriesCart>
        </div>
      </section>
    </>
  );
};

export default CategoriesOfTheMonth;
