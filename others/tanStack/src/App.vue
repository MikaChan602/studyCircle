<template>
	<TodoForm />
	<TodoList />
	<VueQueryDevtools />
</template>
<script setup lang="ts">
	import TodoForm from "./components/TodoForm.vue";
	import TodoList from "./components/TodoList.vue";
	import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>
