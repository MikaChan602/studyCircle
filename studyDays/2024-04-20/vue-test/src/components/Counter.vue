<template>
    <div>
        <h3> 
            Counter unit test
        </h3>
        <p>{{ count }}</p>
        <button @click="addCounter">
            點我+1
        </button>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const count = ref(0)

function addCounter(){
    count.value ++
}

</script>