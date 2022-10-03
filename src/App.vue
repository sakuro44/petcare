<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppointmentCard from "./components/AppointmentCard.vue";
</script>

<template>
  <nav class="nav border">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 border d-flex justify-content-center">
        <div class="btn-group-vertical">
          <button type="button" class="btn btn-secondary btn-lg btn-block">
            ข้อมูลของฉัน
          </button>
          <button type="button" class="btn btn-secondary btn-lg btn-block">
            ข้อมูลสัตว์เลี้ยง
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-block">
            รายการการนัดหมาย
          </button>
          <button type="button" class="btn btn-secondary btn-lg btn-block">
            ประวัติการใช้บริการ
          </button>
        </div>
      </div>

      <div class="col-md-9 border">
        <h1>รายการการนัดหมาย</h1>
        <AppointmentCard />
      </div>
    </div>
  </div>
</template>

<style>
</style>