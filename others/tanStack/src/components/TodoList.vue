<template>
	<ul>
		<li v-for="todo in todos" :key="todo.id">
			<span v-if="editingTodoId === todo.id">
				<input type="text" v-model="editingTodoTitle" />
				<button @click="updateTodo(todo.id)">Update</button>
			</span>
			<span v-else>
				{{ todo.title }}
				<button @click="startEditingTodo(todo)">Edit</button>
				<button @click="deleteTodo(todo.id)">Delete</button>
			</span>
		</li>
	</ul>
</template>
<script setup>
	import { ref, computed } from "vue";
	import { useQuery, useMutation } from "@tanstack/vue-query";
	import appClient from "../apiClient";
	import apiClient from "../apiClient";

	const editingTodoId = ref(null);
	const editingTodoTitle = ref("");

	/** 取列表 ,refetch => 重新拉資料*/
	const {
		data: todosData,
		isLoading: isTodosLoading,
		refetch,
	} = useQuery({
		queryKey: ["todos"],
		queryFn: async () => {
			const { data } = await appClient.get("/todos");
			return data;
		},
	});

	const todos = computed(() => todosData.value || []);

	const { mutate: updateTodoMutate, isPending: isUpdatingMutate } = useMutation(
		{
			mutationFn: async (todo) => {
				const { data } = await appClient.put(`/todos/${todo.id}`, todo);
				return data;
			},
			onSuccess: () => {
				refetch();
				cancelEditingTodo();
			},
		}
	);
	/** 編輯 */
	const startEditingTodo = (todo) => {
		editingTodoId.value = todo.id;
		editingTodoTitle.value = todo.title;
	};

	/**編輯更新*/
	const updateTodo = (todoId) => {
		updateTodoMutate({
			id: todoId,
			title: editingTodoTitle.value,
		});
	};

	const cancelEditingTodo = () => {
		editingTodoId.value = null;
		editingTodoTitle.value = "";
	};

	/** 刪除 */
	const { mutate: deleteTodoMutate, isPending: isDeletingTodo } = useMutation({
		mutationFn: async (todoId) => {
			const { data } = await apiClient.delete(`todos/${todoId}`);
			return data;
		},
		onSuccess: () => {
			refetch();
		},
	});

	const deleteTodo = (todoId) => {
		console.log(todoId);
		deleteTodoMutate(todoId);
	};
</script>
