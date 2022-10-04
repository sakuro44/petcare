<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppointmentCard from "./components/AppointmentCard.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <nav class="nav">
  <div class="container-fluid">
    <Navbar/>
  </div>
</nav>
  <div class="container">
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center">
        <div class="list-group list-group-flush" style="margin-top: 20%; border-top: 2px solid;">
          <button type="button" class="list-group-item list-group-item-action pf-l">
            ข้อมูลของฉัน
          </button>
          <button type="button" class="list-group-item list-group-item-action pf-l">
            ข้อมูลสัตว์เลี้ยง
          </button>
          <button type="button" class="list-group-item list-group-item-action pf-l">
            รายการการนัดหมาย
          </button>
          <button type="button" class="list-group-item list-group-item-action pf-l" style="border-bottom: 2px solid;">
            ประวัติการใช้บริการ
          </button>
        </div>
      </div>

      <div class="col-md-9">
        <h3 style="padding-left:1%;">รายการการนัดหมาย</h3>
        <AppointmentCard />
      </div>
    </div>
  </div>
</template>

<style>
.pf-l {
  font-size: medium;
  color: #737373;
  padding-left: 20%;
  height: 50px;
  width: 225px;
}
</style>