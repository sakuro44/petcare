<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div>
    <h3 class="text-center mb-5 text-uppercase">
      <b style="color: rgb(27, 119, 218);">ราคาวัคซีนหมา-วัคซีนแมว</b>
    </h3>
    <div>
      <div class="text-center">
        <img style="width: 50pc;" src="https://www.thonglorpet.com/_content_images/promotion/S0106.jpg?vs=20221003160647" class="rounded"
          alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://www.thonglorpet.com/_content_html_editor_upload/images/E367FAE6-A22C-D699-72DB-2C61433DA9AD.jpg"
          class="rounded" alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://www.thonglorpet.com/_content_html_editor_upload/images/357F16D7-7B29-9D74-E160-0ABB2D07051E.jpg"
          class="rounded" alt="...">
      </div>
    </div>

  </div>



  <footer>
    <Footer />
  </footer>


</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"
</script>

  
<style lang="scss">
* {
  font-family: "Kanit", sans-serif;
}
h3{
  padding-top: 30px;
}
.kl{
  padding-top:50px;
}
</style>

