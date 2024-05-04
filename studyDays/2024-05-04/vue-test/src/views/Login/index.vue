<template>
    <div class="login">
        <div class="left">左</div>
        <div class="right">
            <Login/>
        </div>
    </div>
</template>

<script setup>
    import Login from './components/Login'
    // import Register from './components/Register.vue'
    console.log('test')
</script>

<style scoped>
.login{
    display: flex;
    width: 100%;
    height: 100vh;
    .left{
        background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
        width: 60%;
    }
    .right{
        background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
        width: 40%;
        text-align: center;
        position: relative;
        div{
            position: relative;
            top: 50%;
        }
    }
}
</style>