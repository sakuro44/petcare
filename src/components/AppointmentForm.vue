<template>
  <div class="col-8">
    <fieldset>
      <legend style="margin-left: 2%"><h3>ทำนัดหมาย</h3></legend>
      <form>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <p>&nbsp;วันที่ต้องการนัดหมาย</p>
              <input type="date" />
            </div>
            <div class="col" style="margin-left: 4%">
              <div class="row" style="padding-top: 0">
                <div class="col-2">ช่วงเช้า</div>
                <div class="col" style="padding-top: 0">
                  <button type="button" class="btn btn-light">
                    10.00 - 10.30
                  </button>
                  <button type="button" class="btn btn-light">
                    10.30 - 11.00
                  </button>
                  <button type="button" class="btn btn-light">
                    11.00 - 11.30
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-2">ช่วงบ่าย</div>
                <div class="col" style="padding-top: 0">
                  <button type="button" class="btn btn-light">
                    13.00 - 13.30
                  </button>
                  <button type="button" class="btn btn-light">
                    13.30 - 14.00
                  </button>
                  <button type="button" class="btn btn-light">
                    14.00 - 14.30
                  </button>
                  <br />
                  <button type="button" class="btn btn-light">
                    15.00 - 15.30
                  </button>
                  <button type="button" class="btn btn-light">
                    15.30 - 16.00
                  </button>
                  <button type="button" class="btn btn-light">
                    16.00 - 16.30
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            ข้อมูลการนัดหมาย
            <div>
              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-primary" for="option1"
                >นัดหมายสัตวแพทย์</label
              >&emsp;&emsp13;
              <input
                type="radio"
                class="btn-check "
                name="options"
                id="option2"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-primary" for="option2"
                >นัดหมายบริการ</label
              >
            </div>
            <div>
              <label for="exampleFormControlSelect1">ข้อมูลสัตว์เลี้ยง</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>ชื่อสัตว์เลี้ยง 1</option>
                <option>ชื่อสัตว์เลี้ยง 2</option>
              </select>
              <label for="exampleFormControlTextarea1"
                >อาการเบื้องต้น/สาเหตุที่นัด/หมายเหตุ</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="btn-submit">
            <button type="button" class="btn btn-outline-success">
              ยืนยันการนัดหมาย
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "AppointmentForm",
  data() {
    return {};
  },
};
</script>

<style>
form {
  padding-top: 0px;
}

button {
  margin: 1%;
}
.container {
  padding-top: 0px;
}
.row {
  padding-top: 0px;
  margin-bottom: 4%;
}
.btn-submit{
    direction: rtl;
}
</style>