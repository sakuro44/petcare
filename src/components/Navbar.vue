<template>
<nav class="navbar  fixed-top  primary-navigation" role="navigation">
  <div class="container-fluid navbar-expand-lg"> 
  <ul> 
    <li><a href="">Petty Pet Care</a></li>
    <li><a href="#">หน้าแรก</a></li>
    <li><a href="#">เกี่ยวกับเรา&nbsp;&nbsp;&nbsp;&dtrif;</a>
      <ul class="dropdown">
        <li><a href="#">ข้อมูลโรงพยาบาล</a></li>
        <li><a href="#">แผนที่โรงพยาบาล</a></li>
        <li><a href="#">ติดต่อเรา</a></li>
      </ul>
    </li>
    <li><a href="#">ศูนย์และคลินิก&nbsp;&nbsp;&nbsp;&dtrif;</a>
      <ul class="dropdown">
        <li><a href="#">ศูนย์หัวใจและหลอดเลือด</a></li>
        <li><a href="#">ศูนย์โรคผิวหนังและภูมิแพ้</a></li>
        <li><a href="#">ศูนย์สัตว์เลี้ยงสูงวัย</a></li>
        <li><a href="#">คลินิกแมว</a></li>
        <li><a href="#">บริการส่งสัตว์เลี้ยงไปต่างประเทศ</a></li>
      </ul>
    </li>
    <li><a href="#">บริการ&nbsp;&nbsp;&nbsp;&dtrif;</a>
      <ul class="dropdown">
        <li><a href="#">ค้นหาแพทย์</a></li>
        <li><a href="#">นัดหมาย</a></li>
        <li><a href="#">แพคเกจและโปรโมชั่น</a></li>
        <li><a href="#">คลินิกแมว</a>
        </li>
        <li><a href="">อาบน้ำตัดขน</a></li>
        <li><a href="#">ห้องพักสัตว์เลี้ยง</a></li>
      </ul></li>
    <li><a href="#">Pet Diaries</a></li>
    <img src="../pic/icons8-penguin-64.png" alt="" style="width: 75px; padding-left: 35px; ">
  </ul>
</div>
  
  
</nav>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
nav {
  
  &.primary-navigation {
    margin: 0 auto;
    display: block;
  
    padding: 30px 0 0 0 ;
    text-align: center;
    font-size: 16px;
    outline-style: solid;
    outline-color: #3ca0e7;
    outline-width: 4px;
    
    

    ul li {
      list-style: none;
      margin: 0 auto;
      border-right: 2px solid #3ca0e7;
      display: inline-block;
      padding: 0 30px;
      position: relative;
      text-decoration: none;
      text-align: center;
      font-family: 'Kanit', sans-serif;
    }

    li a {
      color: black;
    }

    li a:hover {
      color: #3ca0e7;
    }

    li:hover {
      cursor: pointer;
    }

    ul li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      padding-left: 0;
      left: 0;
      display: none;
      background: white;
    }

    ul li:hover > ul,
    ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
      min-width: 250px;
      text-align: left;
      padding-top: 20px;
      box-shadow: 0px 3px 5px -1px #ccc;
    }

    ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 20px;
      border-style: none;
    }

    ul li ul li a:hover {
      padding-left: 10px;
      border-left: 2px solid #3ca0e7;
      transition: all 0.3s ease;
    }
  }
}

a {

    text-decoration: none;

    &:hover {
        color: #3CA0E7;
    }
 
}
 ul li ul li a { transition: all 0.5s ease; }
</style>