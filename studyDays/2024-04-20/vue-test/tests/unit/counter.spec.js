import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter.vue', () => {
    it('click once', async () => {
      // 驗證初始值
        const wrapper = mount(Counter)
        expect(wrapper.vm.count).toBe(0)

      // 獲取元件
        const button = wrapper.find('button')
        const counter = wrapper.find('p')

      // 測試互動
        await button.trigger('click')
        expect(counter.text()).toContain('1')
    })
    })