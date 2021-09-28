<template>
  <Categores />
  <div>
    <section class="product-items-slider section-padding">
      <div class="container">
        <div class="section-header">
          <h5 class="heading-design-h5">
            Top Savers Today <span class="badge badge-success">20% OFF</span>
            <a class="float-right text-secondary" href="shop.html">View All</a>
          </h5>
        </div>

        <div class="row">

          <div class="col-md-3 col-xs-12 mb-4">
            <div class="product">
              <a href="single.html">
                <div class="product-header">
                  <span class="badge badge-success">50% OFF</span>
                  <img
                    class="img-fluid"
                    :src="randomNumber"
                    alt=""
                  />
                  <span class="non-veg text-danger mdi mdi-circle"></span>
                </div>
                <div class="product-body">
                  <h5>Product Title Here</h5>
                  <h6>
                    <strong
                      ><span class="mdi mdi-approval"></span> Available
                      in</strong
                    >
                    - 500 gm
                  </h6>
                </div>
                <div class="product-footer">
                  <p class="offer-price mb-0">
                    $450.99 <i class="mdi mdi-tag-outline"></i>
                    <span class="regular-price">$800.99</span>
                  </p>
                  <button type="button" class="btn btn-secondary btn-sm">
                    <i class="mdi mdi-cart-outline"></i> Add To Cart
                  </button>
                </div>
              </a>
            </div>
          </div>


          
          <div class="col-md-3 col-xs-12 mb-4">
            <div class="product">
              <a href="single.html">
                <div class="product-header">
                  <span class="badge badge-success">50% OFF</span>
                  <img
                    class="img-fluid"
                    :src="randomNumber"
                    alt=""
                  />
                  <span class="non-veg text-danger mdi mdi-circle"></span>
                </div>
                <div class="product-body">
                  <h5>Product Title Here</h5>
                  <h6>
                    <strong
                      ><span class="mdi mdi-approval"></span> Available
                      in</strong
                    >
                    - 500 gm
                  </h6>
                </div>
                <div class="product-footer">
                  <p class="offer-price mb-0">
                    $450.99 <i class="mdi mdi-tag-outline"></i>
                    <span class="regular-price">$800.99</span>
                  </p>
                  <button type="button" class="btn btn-secondary btn-sm">
                    <i class="mdi mdi-cart-outline"></i> Add To Cart
                  </button>
                </div>
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Categores from "../home/categores.vue";
export default {
  name: "HomeComponent",
  components: {
    Categores,
  },
  computed: {
    randomNumber: function () {
      return `https://picsum.photos/id/${Math.floor(Math.random() * 10)}/500/500`
    },
  },
};
</script>