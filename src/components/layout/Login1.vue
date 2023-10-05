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
            <div class="login-login-button">
                <input type="submit" value="Đăng Nhập">
            </div>
            
            <div class="login-login-button1 ">
                <div class="login-login-button-item">
                    <label for="">Đăng Nhập Khác</label>
                </div>
                <div class="login-login-button-t gg">
                    <input type="submit" value="Đăng Nhập Bằng gg">
                </div>
                <div class="login-login-button-t fb">
                    <input  type="submit" value="Đăng Nhập Bằng FB">
                </div>
            </div>
            <div class="login-login-button2">
                <router-link to="Registerr"> Đăng Kí</router-link>
            </div>
        </form>
    </div>
</template>
<style>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-login-input{
    border: 1px solid orangered;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 900;
    font-size: 15px;
    border-radius:10px ;
    color: orangered;
    cursor: pointer;
    transition: 1s;
}
.login-login-input input{
    padding: 10px;
    padding-top: 5px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 5px;
    border: none;
    background-color: white;
    font-size: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    outline: none;

}
.login-login-item h2{
    text-align: center;
    color: orangered;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.login-login-button input{
    padding-top: 10px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
}
.login-login-button{
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-login-button input{
    color: white;
    background: orangered;
    padding-left: 150px;
    padding-right: 150px;
    border: none;
    border-radius:20px ;
    padding-bottom: 15px;
    padding-top: 15px;
    transition:  1s;
   cursor: pointer;
}
.login-login-button1{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
    border-radius:20px ;
    padding-bottom: 10px;
    margin: 10px;
}
.login-login-button-t input{
    display: flex;
    flex-direction: column;
    padding-top: 10px ;
    padding-left: 50px;
    padding-right: 50px;
    border-radius:20px ;
    padding-bottom: 10px;
    margin: 10px;
    border: none;
    outline: none;
    font-size: 12px;
    color:white;
    transition: 1s;
    cursor: pointer;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.fb input{
    background: blue;
}
.gg input{
    background: orangered;
}
.login-login-button2{
    text-align: center;
}
.login-login-button2 a{
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    color: orangered;

}
.login-login-button1 input:hover{
    opacity: 0.8;
}
.login-login-input:hover{ 
   border-color:chocolate;
}
.login-login-button input:hover{
    background: chocolate;
}
</style>