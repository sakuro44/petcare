<template>
  <nav>
    <div class="container-fluid">
      <Navbar />
    </div>
  </nav>
  <div class="container" style="margin-top: 7%">
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center">
        <ListButton />
      </div>
      <div class="col-md-8">
        <AppointmentForm/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import AppointmentCard from "../components/AppointmentCard.vue";
import ListButton from "../components/ListButton.vue";
import AppointmentForm from "../components/AppointmentForm.vue";
import HistoryCardVet from "../components/HistoryCardVet.vue"


</script>
  
  <style>
* {
  font-family: "Kanit", sans-serif;
  padding-top: 7px;
}

.pf-l {
  font-size: medium;
  color: #737373;
  padding-left: 20%;
  height: 50px;
  width: 225px;
}
</style>