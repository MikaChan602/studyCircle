<template>
	<div class="wrapper">
		<div class="inner">
			<el-card>
				<template #header>
					<div class="card-header">
						<span>簡易線上訂位表單</span>
					</div>
				</template>
				<div>
					<el-form label-position="left">
						<el-form-item label="訂購者姓名" :label-width="labelWidth">
							<el-input type="number" v-model="params.data.name" />
						</el-form-item>
						<el-form-item label="電話" :label-width="labelWidth">
							<el-input type="number" v-model="params.data.phone" />
						</el-form-item>
						<el-form-item label="餐廳" :label-width="labelWidth">
							<el-select v-model="params.store" placeholder="請選擇餐廳">
								<el-option
									v-for="item in store.data"
									:label="item"
									:value="item"
									:key="item"
								/>
							</el-select>
						</el-form-item>
						<el-form-item label="人數" :label-width="labelWidth">
							<el-input type="number" v-model="params.data.personNum" />
						</el-form-item>
						<el-form-item label="有無吃素" :label-width="labelWidth">
							<el-radio-group v-model="params.data.vegetarian" data-test="radio">
								<el-radio :value="false" data-test="radio1">無</el-radio>
								<el-radio :value="true" data-test="radio2">有</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item
							label="吃素人數"
							data-test="vegetarianNum"
							v-show="params.data.vegetarian === 1"
							:label-width="labelWidth"
						>
							<el-input type="number" v-model="params.data.vegetarianNum" />
						</el-form-item>
					</el-form>
				</div>
				<template #footer>
					<el-button type="primary" @click="handleSubmit">提交</el-button>
					<el-button type="danger" @click="clearParams">清出</el-button>
				</template>
			</el-card>
		</div>
	</div>
</template>
<script setup>
	import { reactive, ref } from "vue";
	// label寬度
	const labelWidth = ref("110");
	// 下拉選單
	const date = ref("");
	const store = reactive({ data: ["壽司郎", "爭鮮", "居酒屋"] });

	// 參數
	const params = reactive({
		data: {
			name: "",
			phone: "",
			date: "",
			store: "",
			personNum: "",
			vegetarian: false,
			vegetarianNum: 0,
		},
	});

	// 如果是吃素是無人數必等於0

	// 提交表單
	function handleSubmit() {}

	// 清除參數
	function clearParams() {
		Object.keys(params.data).forEach((item) => {
			params.data[item] = "";
		});
		datePicker.value = [];
	}
</script>
<style lang="scss" scoped>
	.wrapper {
		width: 100%;
		margin-top: 10%;
		.inner {
			margin: 0 auto;
			width: 500px;
			max-width: 93%;
		}
	}
</style>
