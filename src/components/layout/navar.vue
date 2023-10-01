<script>
export default {
    name: "Navbar"
}
</script>
<template>
<nav class="item">
    <nav class="item-logo">
        <router-link to="home" class="item-logo-1">
            <img src="../icon/Vẽ tay Hình tròn Logo.png">
            <h2>MUSSic</h2>
        </router-link>
    </nav>
    <nav class="item-menu">
        <ul class="item-menu-ul">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Bài Hát</a>
            </li>
            <li>
                <a href="">VIDEO</a>
            </li>
            <li>
                <a href="">Thư viện</a>
            </li>
        </ul>
    </nav>
    <nav class="item-login_register">
        <nav class="login">
            <RouterLink to="login">Đăng Nhập</RouterLink>
        </nav>
        <nav class="register">
            <RouterLink to="Registerr"> Đăng Kí</RouterLink>
        </nav>
    </nav>

</nav>
</template>

 
<style>

.item-logo-1 {
    text-decoration: none;
    display: flex;
}

.item-logo {
    cursor: pointer;
}

.item-login_register {
    display: flex;
}

.item-logo img {
    width: 50px;
    height: 50px;
    border-radius: 90px;

}

.item-logo h2 {
    font-size: 20px;
    margin-left: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.item-logo {
    display: flex;

}

.item-menu li {
    list-style: none;
}

.item-menu a {
    text-decoration: none;
    color: black;
}

.item-menu {
    display: flex;
}

.item-menu-ul {
    display: flex;
}

.item-menu-ul a {
    margin-left: 30px;
}

.item-login_register a {
    text-decoration: none;
    color: black;
}

.login::after {
    content: "/";
    margin-left: 5px;
    margin-right: 5px;
}

.item {
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: space-around;
    border-bottom: 2px solid orangered;
}

.item a:hover {
    color: orangered;
}
</style>