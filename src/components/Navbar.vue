<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../pic/logo.png" alt="logo" style="width: 90px; position: initial;" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#"
              >หน้าแรก</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              เกี่ยวกับเรา
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">แผนที่โรงพยาบาล</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-light"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              บริการ
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">บริการอาบน้ำสัตว์เลี้ยง</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">บริการฉีดวัคซีนสัตว์เลี้ยง</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >โปรแกรมดูแลสุขสัตว์สัตว์เลี้ยง</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light">Pet Diaries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light">ติดต่อเรา</a>
          </li>
        </ul>
      </div>
      <div>
        <img src="../pic/เข้าสู่ระบบ.png" alt="" />
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background-color: rgb(52, 182, 255);
}
</style>