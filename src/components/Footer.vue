<template>
    <footer class="footer-section" style="margin-top:5% ;">
        <div class="container">
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <h1 style="color: #FFFF;">Petty Pet Care</h1>
                            </div>
                            <div class="footer-text">
                                <p>Pet Health Care เราพร้อมดูแลสัตว์เลี้ยงที่คุณรักตลอด 24 ชั่วโมง</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>ติดตามเรา</span>
                                <a href="#"><img src="../pic/icons8-facebook-48.png" alt=""></a>
                                <a href="#"><img src="../pic/icons8-twitter-circled-48.png" alt=""></a>
                                <a href="#"><img src="../pic/icons8-google-plus-48.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>ศูนย์และคลินิก</h3>
                            </div>
                            <ul>
                                <li><a href="#">ศูนย์หัวใจและหลอดเลือด</a></li>
                                <li><a href="#">ศูนย์โรคตา</a></li>
                                <li><a href="#">ศูนย์โรคผิวหนังและภูมิแพ้</a></li>
                                <li><a href="#">ศูนย์สัตว์เลี้ยงสูงวัย</a></li>
                                <li><a href="#">คลินิกแมว</a></li>
                                <li><a href="#">คลินิกสุนัข</a></li>
                                <li><a href="#">ศูนย์วินิจฉัยและผ่าตัดส่องกล้อง</a></li>
                                <li><a href="#">คลินิกเนื้องอกและมะเร็ง</a></li>
                                <li><a href="#">คลินิกติดเชื้อ</a></li>
                                <li><a href="#">ศูนย์บริการส่งสัตว์เลี้ยงไปต่างประเทศ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>สมัครรับข่าวสาร</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>ลงทะเบียนเพื่อรับสิทธิพิเศษ สินค้าบริการใหม่
                                    และอื่นๆ สำหรับคุณโดยเฉพาะ</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="กรอกอีเมล์ของคุณ">
                                    <button>สมัครรับข่าวสาร</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl col-lg d-none d-lg-block text-center">
                        <div class="footer-menu">
                            <ul>
                                <li><router-link to="/home">หน้าแรก</router-link> </li>
                                <li><a href="#">เกี่ยวกับเรา</a></li>
                                <li><a href="#">ศูนย์และคลินิก</a></li>
                                <li><a href="#">บริการ</a></li>
                                <li><a href="#">Pet Diaries</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style>
ul {
    margin: 0px;
    padding: 0px;
}

.footer-section {
    background-image: linear-gradient(#595a80, #25282d);
    position: relative;
}


.cta-text {
    padding-left: 15px;
    display: inline-block;
}

.cta-text h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px;
}

.cta-text span {
    color: #757575;
    font-size: 15px;
}

.footer-content {
    position: relative;
    z-index: 2;
}

.footer-pattern img {
    position: absolute;
    top: 0;
    left: 0;
    height: 330px;
    background-size: cover;
    background-position: 100% 100%;
}

.footer-logo {
    margin-bottom: 30px;
}

.footer-logo img {
    max-width: 200px;
}

.footer-text p {
    margin-bottom: 14px;
    font-size: 14px;
    color: #7e7e7e;
    line-height: 28px;
}

.footer-social-icon span {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
}

.footer-social-icon a {
    color: #fff;
    font-size: 16px;
    margin-right: 15px;
}

.footer-social-icon img {
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
}


.footer-widget-heading h3 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
    position: relative;
}



.footer-widget ul li {
    display: inline-block;
    float: left;
    width: 50%;
    margin-bottom: 12px;
}

.footer-widget ul li a:hover {
    color: #ffffff;
}

.footer-widget ul li a {
    color: #878787;
    text-transform: capitalize;
}

.subscribe-form {
    position: relative;
    overflow: hidden;
}

.subscribe-form input {
    width: 100%;
    padding: 12px 28px;
    background: #f4f4f4;
    color: #fff;
}

.subscribe-form button {
    position: absolute;
    right: 0;
    background: #1486ff;
    padding: 13px 20px;
    top: 0;
}

.subscribe-form button i {
    color: #fff;
    font-size: 22px;
    transform: rotate(-6deg);
}

.copyright-area {
    background: #25242d;
    padding: 25px 0;
}

.copyright-text p {
    margin: 0;
    font-size: 14px;
    color: #878787;
}



.footer-menu li {
    display: inline-block;
    margin-left: 20px;
}

.footer-menu li:hover a {
    color: #fbfbfb;
}

.footer-menu li a {
    font-size: 14px;
    color: #878787;
}
</style>