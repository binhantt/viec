<script>
export default{
    name:"Registerr"
}
</script>
<template>
   <div class="Registerr"> 
        <form action="home" method="get">
            <div class="Registerr-Registerr">
                    <h2>ĐĂNG KÍ</h2>
            </div>
            <div class="Registerr-Registerr-input">
                <div class="Registerr-Registerr-input-1">
                    <label for="usename"> TÊN ĐĂNG NHẬP</label>
                    <input type="text" placeholder="TÊN ĐĂNG NHẬP" id="usename" required>
                </div>
                <div class="Registerr-Registerr-input-1">
                    <label for=" GMAIL" > GMAIL</label>
                    <input type="email" placeholder=" GMAIL" required id=" GMAIL">
                </div>
                <div class="Registerr-Registerr-input-1">
                    <label for="password-1"> MẬT KHẨU</label>
                    <input type="password" placeholder="MẬT KHẨU" name="name1" required id="password-1">
                </div>
                <div class="Registerr-Registerr-input-1">
                    <label for="passsword-2" > NHẬP LẠI</label>
                    <input type="password" placeholder="MẬT KHẨU" name="name1" required id="passsword-2">
                </div>
            </div>
            <div  class="Registerr-Registerr-button">
                <input type="submit" value="Đăng Kí">
            </div>
            </form>
   </div>
</template>
<style>
    .Registerr{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("..\icon\anh-cuc-dep-ve-not-nhac_051349308.jpg");
        width: 100%;
        height: 572px;
        background-position: center;
        background-size: cover;
    }
    .Registerr-Registerr h2{
        text-align: center;
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: orangered;
    }
    .Registerr-Registerr-input{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .Registerr-Registerr-input-1 {
        padding: 10px;
        border: 2px solid orangered;
        border-radius: 20px;
        width: 380px;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color:transparent;
        color: white;
        transition: 15s;
    }
    .Registerr-Registerr-input-1 input{
        padding: 5px;
        width: 250px;
        border: none;
        font-size: 15px;
        outline: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color:transparent;
        color: white;
    }
    .Registerr-Registerr-input-1 label{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        color: orangered;
    }
    .Registerr-Registerr-button{
        display:flex;
        justify-content: center;
        padding: 5px;
    }
    .Registerr-Registerr-button input{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 150px;
        padding-right: 150px;
        border-radius: 20px;
        color: orangered;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15px;
        font-weight: 700;
        border: 2px solid orangered;
        background-color: white;
    }
    .Registerr-Registerr-input-1:hover{
        border-color: chocolate;
        transition:  1s;   
    }
   .Registerr-Registerr-button button:hover{
        border-color: chocolate;
        transition:  1s;  
        color: chocolate; 
   }
</style>