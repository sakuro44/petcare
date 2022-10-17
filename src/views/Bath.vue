<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div> 
  <h3 class="text-center mb-5 text-uppercase">
        <b class="divider-title title-color">บริการอาบน้ำตัดขน</b>
      </h3>
  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://www.thonglorpet.com/_content_images/petcare/gallery/0E461423-F88A-BC7C-F10B-E6992779844F_531.jpeg.webp)"></div>
    </div>
    <div class="description">
      <h1>บริการอาบน้ำตัดขน</h1>
      <h2>เปิดให้บริการทุกวัน เวลา 08.00 – 20.00</h2>
      <p> เพื่อสิ่งที่ดีที่สุดสำหรับสัตว์เลี้ยง เราจึงใส่ใจทุกรายละเอียด มีการควบคุมทุกขั้นตอนให้เป็นไปตามมาตรฐานโรงพยาบาล
        รวมไปถึงอุปกรณ์ เครื่องมือที่มีคุณภาพ ไม่ว่าจะเป็นแชมพูที่มีสารประกอบจากธรรมชาติ
        ไม่ก่อให้เกิดอาการแพ้และระคายเคืองต่อผิวหนัง ปลอดสารกันเสีย</p>
      <p class="read-more">
        <router-link to="/">นัดหมาย</router-link>
      </p>
    </div>
  </div>
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style="background-image: url(https://www.thonglorpet.com/_content_images/petcare/image2/S0065_675.jpg.webp?vs=20220925194942)"></div>
   
    </div>
    <div class="description">
      <p> ทาง Petty Pet Care มีการแยกห้องอาบน้ำตัดขนของน้องสุน้ขและน้องแมว
        เพื่อให้น้องแมวมีอาการสงบไม่แตกตื่นหรือตกใจในระหว่างการรับบริการ</p>
      <p class="read-more">
        <router-link to="/">นัดหมาย</router-link>
      </p>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-start">
      <div class="col ">
        <div class="container">
          <div class="rr row ">
            <div class="col-3 1">
              <button class="b"> <img style="width: 15pc;" src="https://www.thonglorpet.com/_content_images/petcare/gallery/24B8ED0D-0862-F0A9-DC3F-EE30E862485D_531.jpeg.webp" />

               

              </button>

            </div>

            <div class="col-3 2">
              <button class="b"> <img style="width: 15pc;"  src="https://www.thonglorpet.com/_content_images/petcare/gallery/A089074E-6666-ED8F-73CD-640674F83135.jpeg" />

               

              </button>
            </div>

            <div class="col-3 3">
              <button class="b"> <img style="width: 15pc;" src="https://www.thonglorpet.com/_content_images/petcare/gallery/0A465240-A83E-C84D-5E2F-DE6EF0B6B387_531.jpeg.webp" />

               

              </button>
            </div>

            <div class="col-3 4">
              <button class="b"> <img style="width: 15pc;"  src="https://www.thonglorpet.com/_content_images/petcare/gallery/F33020FD-098E-A227-0209-15F1DCED3329_531.jpeg.webp" />
               
              </button>
            </div>
          </div>
        </div>
      </div>
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

.divider-title {
  color: rgb(27, 119, 218);
}



$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  a {
    color: inherit;
    &:hover {
      color: $color_prime;
    }
  }
  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }
  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }
  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform .2s;
  }
  .description {
    padding: 1rem;
    background: $color_white;
    position: relative;
    z-index: 1;
    h1,
    h2 {
      font-family: Poppins, sans-serif;
    }
    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: $color_grey_dark;
      margin-top: 5px;
    }
    .read-more {
      text-align: right;
      a {
        color: $color_prime;
        display: inline-block;
        position: relative;
        &:after {
          content: "\f061";
          font-family: FontAwesome;
          margin-left: -10px;
          opacity: 0;
          vertical-align: middle;
          transition: margin .3s, opacity .3s;
        }

        &:hover:after {
          margin-left: 5px;
          opacity: 1;
        }
      }
    }
  }
  p {
    position: relative;
    margin: 1rem 0 0;
    &:first-of-type {
      margin-top: 1.25rem;
      &:before {
        content: "";
        position: absolute;
        height: 5px;
        background: $color_prime;
        width: 35px;
        top: -0.75rem;
        border-radius: 3px;
      }
    }
  }
  &:hover {
    .details {
      left: 0%;
    }
  }


  @media (min-width: 640px) {
    flex-direction: row;
    max-width: 700px;
    .meta {
      flex-basis: 40%;
      height: auto;
    }
    .description {
      flex-basis: 60%;
      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
    &.alt {
      flex-direction: row-reverse;
      .description {
        &:before {
          left: inherit;
          right: -10px;
          transform: skew(3deg)
        }
      }
      .details {
        padding-left: 25px;
      }
    }
  }
}
</style>

