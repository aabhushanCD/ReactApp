import item_img from "../assets/img/category_img_01.jpg";
const CategoriesCart = () => {
  return (
    <div class="col-12 col-md-3 p-5 mt-3">
      <a href="#">
        <img src={item_img} class="rounded-circle img-fluid border" />
      </a>
      <h5 class="text-center mt-3 mb-3">{"item_name"}</h5>
      <p class="text-center">
        <a class="btn btn-success">{"Go_shop"}</a>
      </p>
    </div>
  );
};
export default CategoriesCart;
