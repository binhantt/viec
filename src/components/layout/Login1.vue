<script>

export default{
    name:"login1",
}
</script>
<template>
    <div class="login">
        <form action="home" method="get">
            <div class="login-login-item">
                <h2>Đăng Nhập</h2>
            </div>
            <div class="login-login">
                <div class="login-login-input">
                    <label for="usename">Tên Đăng Nhập</label>
                    <input type="text" id="usename" placeholder="Tên Đăng Nhập" required>
                </div>
                <div class="login-login-input">
                    <label for="password">Mật Khẩu</label>
                    <input type="password" id="password" placeholder="Mật Khẩu" required>
                </div>

            </div>
            <div class="login-login-buttton">
                <input type="submit" value="Đăng Nhập">
            </div>
            
            <div class="login-login-button1">
                <div class="login-login-button-item">
                    <label for="">Đăng Nhập Khác</label>
                </div>
                <div class="login-login-button-gg">
                    <input type="submit" value="Đăng Nhập Bằng gg">
                </div>
                <div class="login-login-button-fb">
                    <input type="submit" value="Đăng Nhập Bằng FB">
                </div>
            </div>
            <div class="login-login-button2">
                <router-link to=""> Đăng Kí</router-link>
            </div>
        </form>
    </div>
</template>