<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div>
    <h3 class="text-center mb-5 text-uppercase">
      <b style="color: rgb(27, 119, 218);">โปรแกรมดูแลสุขภาพน้องหมาน้องแมว ราคาเริ่มต้น 3,500 บาท</b>
    </h3>
    <div>
      <div class="text-center">
        <img src="https://www.thonglorpet.com/_content_images/promotion/20220227/hlopv0234578.jpg" class="rounded"
          alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://www.thonglorpet.com/_content_html_editor_upload/images/FF040AD4-5C5E-86FA-7200-68864F54F265.jpg"
          class="rounded" alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://www.thonglorpet.com/_content_html_editor_upload/images/F64713FC-BF9D-CF52-BCD1-115FCFC94F02.jpg"
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

