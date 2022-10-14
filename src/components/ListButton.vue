<template>
  <div class="list-group list-group-flush">
    <button type="button" class="list-group-item list-group-item-action pf-l">
      ข้อมูลของฉัน
    </button>
    <button type="button" class="list-group-item list-group-item-action pf-l">
      ข้อมูลสัตว์เลี้ยง
    </button>
    <button type="button" class="list-group-item list-group-item-action pf-l">
      รายการการนัดหมาย
    </button>
    <button
      type="button"
      class="list-group-item list-group-item-action pf-l"
      style="border-bottom: 2px solid"
    >
      ประวัติการใช้บริการ
    </button>
  </div>
</template>

<script>
export default {
  name: "Listbutton",
};
</script>

<style scoped>
div {
  margin-top: 20%;
  border-top: 2px solid;
}
</style>