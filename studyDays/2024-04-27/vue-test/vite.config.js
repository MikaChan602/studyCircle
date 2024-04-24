import { defineConfig } from "@vue/cli-service";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    server:{
        hmr:true,
    },
    plugins:[vue()]
})