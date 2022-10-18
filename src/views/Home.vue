<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div>
    <div class="r1 row">
      <div class="col">
        <h1>Petty Pet Care</h1>
        <p>
          Pet Health Care
          เราพร้อมดูแลสัตว์เลี้ยงที่คุณรักตลอด 24 ชั่วโมง
        </p>
        <div class="input-group mb-3">
          <input type="search" class="form-control " placeholder="ค้นหา" aria-label="Search"
            aria-describedby="search-addon">
          <button class="btn btn-primary" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg"
              width="30" height="30" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              <path
                d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
            </svg></button>
        </div>
      </div>

      <div class="col">
        <router-link to="/">
          <div class="card1 c1">
            <h5 style="color: white ;">
              บริการนัดหมาย
            </h5>
          </div>
        </router-link>
        <router-link to="/bath">
        <div class="card1 c2">
          <h5 style="color: white ;">
            อาบน้ำตัดขน
          </h5>
        </div>
      </router-link>
        <div class="card1 c3">
          <h5 style="color: white ;">
            แพคเกจโปรโมชั่น
          </h5>
        </div>
        <router-link to="/room">
        <div class="card1 c4">
          <h5 style="color: white ;">
            ห้องพักสัตว์เลี้ยง
          </h5>
        </div>
      </router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-start">
      <div class="col ">
        <h2>
          ศูนย์และคลินิก
        </h2>
        <div class="container">
          <div class="rr row ">
            <div class="col-3 1">
              <button class="b"> <img src="../pic/cardiogram-3.png" />

                <p class="pp">ศูนย์หัวใจและหลอดเลือด</p>

              </button>

            </div>

            <div class="col-3 2">
              <button class="b"> <img src="../pic/hair-3.png" />

                <p class="pp">ศูนย์โรคผิวหนังและภูมิแพ้</p>

              </button>
            </div>

            <div class="col-3 3">
              <button class="b"> <img src="../pic/pet-house-3.png" />

                <p class="pp">ศูนย์สัตว์เลี้ยงสูงวัย</p>

              </button>
            </div>

            <div class="col-3 4">
              <button class="b"> <img src="../pic/cat-2.png" />
                <p class="pp">คลินิกแมว</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card-section" style="margin-top: 5% ;">
        <h1>แพ็กเกจและโปรโมชั่น</h1>
        <h4>แพ็กเกจและโปรโมชั่นพิเศษเพื่อดูแลสัตว์เลี้ยงที่คุณรักจาก Petty Pet Care</h4>
        <div class="card-list">
          <router-link to="/catgrom">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/promotion/20220404/bcgjlptvyz13.jpg" />
          </div>
        </router-link>
        <router-link to="/doggrom">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/promotion/20220331/agijlmv46789.jpg" />
          </div>
        </router-link>
        <router-link to="/vat">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/promotion/S0106.jpg?vs=20221003160647" />
          </div>
        </router-link>
          <router-link to="/care">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/promotion/20220227/hlopv0234578.jpg" />
          </div>
        </router-link>
        <router-link to="/haert">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/promotion/20210208/afgikoquy039.jpg" />
          </div>
        </router-link>
        </div>
      </div>

      <div class="card-section">
        <h1>Pet Diaries</h1>
        <h4>บทความเรื่องสุขภาพสัตว์เลี้ยงที่คุณควรรู้ รวบรวมข้อมูลจาก Petty Pet Care</h4>
        <div class="card-list">
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/diary/20220708/aefjkpqsx056.jpg" />
          </div>
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/diary/20220708/cgmorstxy135.jpg" />
          </div>
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/diary/20220627/dimnpuwx0169.jpg" />
          </div>
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/diary/20220609/dfhmoqstwx05.jpg" />
          </div>
          <div class="card">
            <img src="https://www.thonglorpet.com/_content_images/diary/20220425/abehilqy1349.jpg" />
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

  
<style scoped lang="scss">
* {
  font-family: "Kanit", sans-serif;
}


.card-section {
  margin: 15px 0 20px 0;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-section>h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.card-section>h4 {
  color: rgb(52, 182, 255);
  margin-top: 3px;
  margin-bottom: 6px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.card {
  width: 320px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  margin: 15px 20px;
  box-shadow: 0 8px 30px rgba(0, 47, 203, 0.2), 0 0 5px rgba(0, 48, 204, 0.15);
  transform: scale3d(1, 1, 1);
  transition: all 0.2s ease-out, filter 0.75s ease-out;
  background: rgba(0, 0, 0, 0.2);

}

.card:hover {
  box-shadow: 10px 20px 30px rgba(0, 51, 161, 0.653), 0 0 15px rgba(0, 51, 161, 0.625);
  filter: grayscale(0) saturate(105%) brightness(100%) contrast(100%);
  cursor: url('data:image/png;base64,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') 16 16, auto;
}

.card>img {
  position: absolute;
  width: 115%;
  height: 140%;
  top: -27%;
  right: -1%;
  z-index: -10;
  transform: scale(1.05);
  transition: all 0.2s ease-out, transform 0.2s ease-out, filter 0.75s ease-out;
  filter: blur(0px);
}

.card.blur>img {
  filter: blur(1px) grayscale(0.1) saturate(95%);
}

.card>.shineLayer {
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%);
  transition: all 0.2s ease-out;
}


.b {
  background: none;
  border: none;
  margin-top: 20%;
}

.pp {
  margin-top: 13px;
}

.rr {
  margin-left: 50px;
  text-align: center;
  transition: 2s;

  :hover {
    transform: translateY(-5px);
  }
}


.header {
  width: 100%;
  height: 100%;
  padding: 100px;
  background-image: linear-gradient(rgba(193, 230, 255, 0.7), rgba(255, 255, 255, 0.7))
}

.r1 {
  display: flex;
  height: 88%;
  align-items: center;
  margin-left: 40px;

}

.col {
  flex-basis: 50%;

}

h1 {
  color: rgb(27, 119, 218);
  font-size: 60px;
}

p {
  color: rgb(52, 182, 255);
  font-size: 17px;
  line-height: 20px;

}

h2 {
  margin-left: 90px;
  color: rgb(27, 119, 218);
  border-bottom: 4px solid rgb(52, 182, 255);
  display: inline-block;
}

.card1 {
  width: 200px;
  height: 200px;
  display: inline-block;
  border-radius: 30px;
  padding: 30px 25px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 50px;
  margin-left: 65px;
  background-position: center;
  background-size: cover;
  transition: 0.4s;
  box-shadow: 5px 5px 10px 0px rgb(129, 143, 183);
  color: white;

}

.c1 {
  background-image: url(https://www.allianz.ie/blog/your-pet/visiting-the-vet-covid19/_jcr_content/root/stage/stageimage.img.82.3360.jpeg/1636175244662/cat-at-vet.jpeg);
}

.c2 {
  background-image: url(https://www.k9ofmine.com/wp-content/uploads/2018/10/Conditioner-for-Dogs-900x600.jpg);
}

.c3 {
  background-image: url(https://foreveryoung.sapo.pt/wp-content/uploads/2022/02/pets-g7620377b9_1920.jpg);
}

.c4 {
  background-image: url(https://www.thonglorpet.com/_content_images/room/S0091.jpeg?vs=20220906055320);
}

.card1:hover {
  transform: translateY(-15px);
  box-shadow: 5px 5px 10px 15px rgba(28, 119, 238, 0.25),
    -5px -5px 10px 15px rgba(28, 119, 238, 0.25);
}
</style>

