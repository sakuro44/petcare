<template>
  <h3 style="padding-left:1%;">รายการการนัดหมาย</h3>
  <div class="card" v-for="item in items" v-bind:key="item.id">
    <div class="card-body container">
      <div class="row">
        <div class="col-sm-8 main_details">
          <h5 class="card-title">
            <b style="font-size: xx-large">{{ item.time }}</b> &emsp;{{
              item.date
            }}
          </h5>
          <div class="row" style="line-height:200%;">
            <div class="col-sm-7" >
              ชื่อเจ้าของ : {{ item.oname }} <br> ประเภทการนัดหมาย : {{ item.type }}
            </div>
            <div class="col-sm-4">
              ชื่อสัตว์เลี้ยง : {{ item.pname }} <br> หมายเหตุ : {{ item.note }}
            </div>
          </div>
          <sub> - หากมาช้าเกิน 30 นาทีจากการนัดหมาย จะต้องทำการนัดหมายใหม่</sub>
        </div>
        <div class="col-sm-4 sub_details d-flex justify-content-center">
          <h5>
            BOOKING REF <b>{{ item.bookingref }}</b>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name : 'AppointmentCard',
  data() {
    return {
      items: [
        {
          time: "10:30 AM",
          date: "17 กันยายน 2565",
          oname: "Alex Fol",
          pname: "ส้มส้ม",
          type: "นัดหมายสัตว์แพทย์",
          note: "รับวัคซีนรวม",
          bookingref: "1VC123",
        },
        {
          time: "10:30 AM",
          date: "17 กันยายน 2565",
          oname: "Alex Fol",
          pname: "ส้มส้ม",
          type: "นัดหมายสัตว์แพทย์",
          note: "รับวัคซีนรวม",
          bookingref: "1VC123",
        },
        {
          time: "10:30 AM",
          date: "17 กันยายน 2565",
          oname: "Alex Fol",
          pname: "ส้มส้ม",
          type: "นัดหมายสัตว์แพทย์",
          note: "รับวัคซีนรวม",
          bookingref: "1VC123",
        },
      ],
    };
  },
};
</script>

<style scoped>
  *{
    font-family: 'Kanit', sans-serif;
  }
.card {
  border: none;
}
.main_details {
  position: relative;
  border-radius: 15px;
  padding: 25px;
  background-color: #f9f9f9;
}
.main_details::before {
  content: "";
  position: absolute;
  top: 15%;
  border-right: 2px dashed;
  height: 75%;
  width: 95%;
}
.sub_details {
  border-radius: 15px;
  padding: 30px;
  background-color: #f9f9f9;
}
</style>