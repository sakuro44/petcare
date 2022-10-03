<template>
  <div class="card" v-for="item in items" v-bind:key="item.id">
    <div class="card-body container">
      <div class="row">
        <div class="col-sm-8 main_details">
          <h5 class="card-title">{{ item.time }} {{ item.date }}</h5>
          <p>
            ชื่อเจ้าของ : {{ item.oname }} ชื่อสัตว์เลี้ยง : {{ item.pname }}
            <br />
            ประเภทการนัดหมาย : {{ item.type }} หมายเหตุ : {{ item.note }}
          </p>
          <sub>หากมาช้าเกิน 30 นาทีจากการนัดหมาย จะต้องทำการนัดหมายใหม่</sub>
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
.main_details {
  border-radius: 15px;
  padding: 25px;
  background-color: #f9f9f9;
}
.sub_details {
  border-radius: 15px;
  padding: 25px;
  background-color: #f9f9f9;
}
</style>