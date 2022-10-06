<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppointmentCard from "./components/AppointmentCard.vue";
import Navbar from "./components/Navbar.vue";
import ListButton from "./components/ListButton.vue";
</script>

<template>
  <nav class="nav">
  <div class="container-fluid">
    <Navbar/>
  </div>
</nav>
  <div class="container" style="margin-top: 7%;">
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center">
        <ListButton />
      </div>

      <div class="col-md-9">
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