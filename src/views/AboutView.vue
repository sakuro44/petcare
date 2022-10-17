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
        <PetInformationCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import ListButton from "../components/ListButton.vue";
<<<<<<< HEAD
import MyInformation from "../components/MyInformation.vue"

=======
import PetInformationCard from "../components/PetInformationCard.vue"
>>>>>>> 3ba90b1abea5cdb75e807d7d60a782bd45994dc0

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