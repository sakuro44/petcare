<template>
  <h3 style="text-align: center; padding-left: 1%; padding-bottom: 3%">
    ข้อมูลสัตว์เลี้ยง
  </h3>
  <div class="container card" v-for="item in petcards" v-bind:key="item.id">
    <div class="row">
      <div class="col-3" style="margin: auto; padding-left: 5%">
        <img class="profile" src="../pic/cat_profile1.png" />
      </div>
      <div class="col-6" style="direction: ltr; padding-left: 0%">
        <b>PET ID : {{ item.petID }}</b>
        <div class="row">
          <div class="col">ชื่อเล่น : {{ item.pname }}</div>
        </div>
        <div class="row">
          <div class="col">ชนิด : {{ item.type }}</div>
          <div class="col">สายพันธุ์ : {{ item.breeding }}</div>
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col">เพศ : {{ item.sex }}</div>
          <div class="col">น้ำหนัก : {{ item.petweigth }}</div>
          <div class="col">อายุ : {{ item.age }}</div>
        </div>
      </div>
      <div class="col" style="direction: rtl">
        <div class="row">
          <div class="btn-submit">
            <button type="button" class="btn btn-primary">ทำการนัดหมาย</button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img
              src="../pic/calendar.png"
              alt="calendar"
              style="height: 25px"
            />
            &nbsp;
            <img src="../pic/clock .png" alt="clock" style="height: 25px" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetInformationCard",
  data() {
    return {
      petcards: [
        {
          petID: "0001",
          pname: "ส้มส้ม",
          type: "แมว",
          breeding: "แมวจร",
          sex: "male",
          petweigth: "12 kg",
          age: "4 y",
        },
        {
          petID: "0002",
          pname: "ไคจู",
          type: "แมว",
          breeding: "แมวจร",
          sex: "male",
          petweigth: "10 kg",
          age: "3 y",
        },
      ],
    };
  },
};
</script>

<style scoped>
button {
  border-radius: 25px;
  padding-left: 25px;
  padding-right: 25px;
}
.card {
  border: 1px solid;
  border-radius: 25px;
  padding: 2%;
  padding-bottom: 4%;
  margin-bottom: 3%;
}
.profile {
  width: 75px;
  height: 80px;
}
</style>