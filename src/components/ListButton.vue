<template>
  <div class="list-group list-group-flush" >
    <router-link to="/myinformation"
      ><button
        type="button"
        class="list-group-item list-group-item-action pf-l"
        style="border-top: 2px solid;"
      >
        ข้อมูลของฉัน
      </button></router-link
    >
    <router-link to="/petinformation"
      ><button
        type="button"
        class="list-group-item list-group-item-action pf-l"
      >
        ข้อมูลสัตว์เลี้ยง
      </button></router-link
    >
    <router-link to="/appointment"
      ><button
        type="button"
        class="list-group-item list-group-item-action pf-l"
      >
        รายการการนัดหมาย
      </button></router-link
    >
    <router-link to="/history"
      ><button
        type="button"
        class="list-group-item list-group-item-action pf-l"
        style="border-bottom: 2px solid;"
      >
        ประวัติการใช้บริการ
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Listbutton",
};
</script>

<style scoped>
router-link{
    text-decoration: none;
}
div {
  margin-top: 20%;
}
</style>