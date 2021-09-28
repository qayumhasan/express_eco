<template>
          <section class="osahan-carousel-two  border-top py-4">
         <div class="container">
            <div class="row">
               <div class="col-lg-3">
                  <div class="category-list-sidebar">
                     <div class="category-list-sidebar-header">
                        <button class="btn btn-link badge-success" type="button" data-toggle="collapse"
                           data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                           All Categories <i class="mdi mdi-menu" aria-hidden="true"></i>
                        </button>
                     </div>
                     <div class="collapse show" id="collapseExample">
                        <div class="category-list-sidebar-body">
                           <div class="item">
                              <div class="sidebar-category-item">
                                 <a href="shop.html">
                                    <img class="img-fluid" src="https://picsum.photos/200" alt="">
                                    <h6>Fruits & Vegetables</h6>
                                    <p>15</p>
                                 </a>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-9">
                  <div class="carousel-slider-main text-center">
                     <div class="owl-carousel owl-carousel-slider rounded overflow-hidden shadow-sm">
                        <div class="item">
                           <a href="shop.html"><img class="img-fluid" src="https://picsum.photos/id/2/200/300" alt="First slide"></a>
                        </div>
                        <div class="item">
                           <a href="shop.html"><img class="img-fluid" src="img/slider/slider2.jpg" alt="First slide"></a>
                        </div>
                        <div class="item">
                           <a href="shop.html"><img class="img-fluid" src="img/slider/slider1.jpg" alt="First slide"></a>
                        </div>
                        <div class="item">
                           <a href="shop.html"><img class="img-fluid" src="img/slider/slider2.jpg" alt="First slide"></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
</template>
<script>

export default {
   created(){
           var mainslider = $(".owl-carousel-slider");
        if (mainslider.length > 0) {
            mainslider.owlCarousel({
                items: 1,
                dots: false,
                lazyLoad: true,
                pagination: true,
                autoPlay: 4000,
                loop: true,
                singleItem: true,
                navigation: true,
                stopOnHover: true,
                nav: true,
                navigationText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"]
            });
        }
   }
}
</script>