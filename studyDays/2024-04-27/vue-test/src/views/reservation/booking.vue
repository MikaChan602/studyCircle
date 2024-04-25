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
					<el-row>
						<el-col>
							<label for="name">
								姓名
								<input
									id="name"
									type="text"
									v-model="params.data.name"
									data-test="name"
								/>
							</label>
						</el-col>
						<el-col>
							<label for="phone">
								電話
								<input
									id="phone"
									type="number"
									v-model="params.data.phone"
									data-test="phone"
								/>
							</label>
						</el-col>
						<el-col>
							<label for="store">
								餐廳
								<select
									id="store"
									v-model="params.data.store"
									data-test="selector"
									style="width: 155px"
								>
									<option
										v-for="item in store.data"
										:label="item"
										:value="item"
										:key="item"
									>
										{{ item }}
									</option>
								</select>
							</label>
						</el-col>
						<el-col>
							<label for="people">
								人數
								<input
									id="people"
									type="number"
									v-model="params.data.personNum"
									data-test="people"
								/>
							</label>
						</el-col>
						<el-col>
							<span>是否吃素</span>
							<label style="margin-left: 2%" for="vegetarian-yes">
								<input
									id="vegetarian-yes"
									type="radio"
									data-test="radio1"
									:value="true"
									v-model="params.data.vegetarian"
								/>
								是
							</label>
							<label for="vegetarian-no">
								<input
									id="vegetarian-no"
									type="radio"
									data-test="radio2"
									:value="false"
									v-model="params.data.vegetarian"
								/>
								否
							</label>
						</el-col>
						<el-col v-show="params.data.vegetarian === true">
							<label for="vegetarianNum">
								吃素人數
								<input
									id="vegetarianNum"
									type="number"
									v-model="params.data.personNum"
									data-test="vegetarianNum"
								/>
							</label>
						</el-col>
					</el-row>
				</div>
				<template #footer>
					<el-button type="primary" @click="handleSubmit">提交</el-button>
					<el-button type="danger" @click="clearParams" data-test="clear">清除</el-button>
				</template>
			</el-card>
		</div>
	</div>
</template>
<script setup>
	import { reactive, ref } from "vue";
	import { ElRow, ElCard, ElButton, ElCol } from "element-plus";
	const store = reactive({ data: ["壽司郎", "爭鮮", "居酒屋"] });

	// 參數
	const params = reactive({
		data: {
			name: "",
			phone: "",
			store: "",
			personNum: "",
			vegetarian: false,
			vegetarianNum: "",
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
		params.data.vegetarian = false;
	}
	// 確認提交正確參數
	function handleSubmit(){
		
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
