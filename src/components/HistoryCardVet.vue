<template>
  <h3 style="padding-left: 1%">ประวัติการใช้บริการ</h3>
  <div class="card shadow" v-for="item in items" v-bind:key="item.id">
    <div class="card-body container" style="padding: 10px;">
      <div class="row">
        <div class="col-sm">
          <div class="row text-white">
            <div class="col-sm-4">
              <h1 class="date">11</h1>
            </div>
            <div class="col">
              <span> วันอาทิตย์ </span><span> กันยายน 2565 </span>
            </div>
          </div>
        </div>
        <div class="col-sm-10" style="padding-left: 4%;">
          <h5 style="font-weight: bold; margin-bottom: 0px">
            CASE ID: {{ item.caseID }}
          </h5>
          <div
            class="row"
            style="padding-top: 0px; position: relative; line-height: 200%"
          >
            <div class="col-sm-4">
              ประเภทการนัดหมาย : {{ item.type }} <br />
              ชื่อเจ้าของ : {{ item.oname }}
            </div>
            <div class="col-sm-4">
              ประเภท : {{ item.note }} <br />
              ชื่อสัตว์เลี้ยง : {{ item.pname }}
            </div>
            <div class="col-sm-4">
              BARBER ID : {{ item.barberID }} <br />
              ราคา : {{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "HistoryCardVet",
  data() {
    return {
      items: [
        {
          caseID: "1VC123",
          type: "นัดหมายบริการ",
          note: "อาบน้ำ",
          oname: "Alex Fol",
          pname: "ส้มส้ม",
          barberID: "BB112",
          price: "350",
        },
        {
          caseID: "1VC123",
          type: "นัดหมายบริการ",
          note: "อาบน้ำ-ตัดขน",
          oname: "Alex Fol",
          pname: "ส้มส้ม",
          barberID: "BB112",
          price: "350",
        },
      ],
    };
  },
};
</script>

<style>
* {
  font-family: "Kanit", sans-serif;
}
.card {
  padding-top: 0px;
  padding-bottom: 10px;
  border-radius: 25px;
  border: none;
  margin-top: 2%;
  background: linear-gradient(90deg, #F6C6EA 17%,#F9F9F9 100px);
}
.date {
  position: absolute;
  top: 25%;
  left: 3%;
  font-weight: bolder;
}
</style>