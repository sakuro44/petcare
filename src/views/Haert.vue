<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div>
    <h3 class="text-center mb-5 text-uppercase">
      <b style="color: rgb(27, 119, 218);">แพ็กเกจตรวจหัวใจ สำหรับสุนัข-แมว ราคาเริ่มต้น 2,500 บาท</b>
    </h3>
    <div>
      <div class="text-center">
        <img style="width: 50pc;" src="https://www.thonglorpet.com/_content_images/promotion/20210208/afgikoquy039.jpg" class="rounded"
          alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://thonglorpet.com/public/upload/%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B8%AB%E0%B8%A1%E0%B8%B2%201200x1200.jpg"
          class="rounded" alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://thonglorpet.com/public/upload/%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B9%83%E0%B8%88%E0%B9%81%E0%B8%A1%E0%B8%A7%201200x1200.jpg"
          class="rounded" alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://thonglorpet.com/public/upload/145290608_2574147036043426_7839148843016484296_o.jpg"
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

