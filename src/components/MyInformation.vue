<template>
  <h3 style="text-align: center; padding-left: 1%; padding-bottom: 3%"> รายการการนัดหมาย</h3>
  <fieldset>
    <legend>แก้ไขข้อมูลส่วนตัว</legend>
    <form style="padding: 0%;">
      <div class="container" style="padding-top: 0%;">
        <div class="row">
          <div class="col">
            <label for="exampleFormControlInput1"
              >เลขบัตรประชาชน / Passport no.</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="col">
            <label for="exampleFormControlInput1">ชื่อ - สกุล</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlInput1">เบอร์โทรศัพท์</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="col">
            <label for="exampleFormControlInput1">อีเมล</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleFormControlInput1">วันเดือนปีเกิด</label>
            <input
              type="date"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="col">
            <label for="exampleFormControlInput1">เพศ</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
        </div>
        <div class="btn-submit">
            <button type="button" class="btn btn-outline-primary" style="height: 35px;">
              บันทึกการแก้ไข
            </button>
          </div>
      </div>
    </form>
  </fieldset>
</template>

<script>
export default {
  name: "MyInformation",
};
</script>

<style scoped>
fieldset{
    border: 1px solid;
    border-radius: 10px;
    padding: 2%;
}
legend{
  margin-left: 2%;
  margin-bottom: 0%;

}
.form-control {
    height: 35px;
}
.col{
    padding-top: 0px;
}
.row{
    margin-top: 0%;
    margin-bottom: 1%;
}

</style>

