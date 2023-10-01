<script>
export default{
    name:"foder"
}
</script>
<template>
    <header class="header">
        <header class="header-title">
             <header class="header-title-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
                </svg>
                <a href=""> Home</a>
            </header>
            <header class="header-title-icon">
                <img src="../Playout/icons/icons8-back-50.png" alt="">
            </header>
            <header class="header-title-charts">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/>
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/>
                <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <a href="">BXH</a>
            </header>
            </header>
            <header class="header-seach">
                    <header class="header-seach-1">
                        <header class="header-seach-1-input">
                            <input type="text" placeholder="Tìm Kiếm Nhạc ...">
                        </header>
                        <header class="header-seach-1-button">
                            <button  type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by 
                                    @fontawesome - https://fontawesome.com License - https://fontawesome.com/license
                                    (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                                </svg>
                            </button>
                    </header>
                </header>
            </header>
            <header class="header-img">
                    
            </header>
    </header>
</template>
<style>

.header-title-charts:hover{
    color: orangered;
}
.header-title-home a:hover{
    color: orangered;
}
.header-title-charts a:hover{
    color: orangered;
}
.header-title-home:hover{
    color: orangered;
}
.header-title-charts{
    display: flex;
    align-items: center;
}
.header-title-icon img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
.header-seach{
    display: flex;
    justify-content: center;
    padding: 10px;
}
.header-seach-1{
    display: flex;
    border: 1px solid orangered;
    padding: 10px;
   border-radius: 10px;
}
.header-seach-1 input{
    width: 500px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    border: none;
    font-size: 18px;
    outline: none;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
.header-seach-1 button{
    width: 50px;
    height: 22px;
    border-radius: 0 10px  10px 0;
    border: none;
    background-color: white;
}
.header-title a{
    color: black;
}
.header-title{
    padding: 20px;
}
.header-title-charts svg{
    margin-right: 5px;
}
.header-title-home svg{
    margin-right: 5px;
}
.header-title-charts a{
    text-decoration: none;
}
.header-title{
    display: flex;
    align-items: center;
}
.header-title-home{
    display: flex;
    align-items: center;
    margin-right: 5px;
}
.header-title-home a{
    text-decoration: none;
}
</style>
