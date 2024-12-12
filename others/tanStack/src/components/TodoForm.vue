<template>
	<div>
		<input type="text" v-model="title" />
		<button @click="createTodo" :disabled="isCreatingTodo">
			{{ isCreatingTodo ? "Creating" : "Create" }}
		</button>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	import { useMutation, useQueryClient } from "@tanstack/vue-query";
	import apiClient from "../apiClient";

	const queryClient = useQueryClient();

	const title = ref("");

	const { mutate: createTodoMutate, isPending: isCreatingTodo } = useMutation({
		mutationFn: async (newTodo) => {
			const { data } = await apiClient.post("/todos", newTodo);
			return data;
		},
		// 前一個API執行成功無錯誤時到onSuccess
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});

	const createTodo = () => {
		// console.log("list", list.value);
		createTodoMutate({
			id: crypto.randomUUID,
			title: title.value,
		});
	};
</script>
