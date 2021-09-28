<template>
          <nav class="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
         <div class="container">
            <div class="collapse navbar-collapse" id="navbarText">
               <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link shop" :to="{name:'home'}"><span class="mdi mdi-store"></span> Super Store</router-link>
                  </li>

                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name:'home'}"> Home</router-link>
                  </li>

                  <li class="nav-item">
                      <router-link class="nav-link" :to="{name:'products'}"> Products</router-link>
                  </li>
                
               </ul>
            </div>
         </div>
      </nav>
</template>

<script>
export default {
    name:"NavComponent",
}
</script>