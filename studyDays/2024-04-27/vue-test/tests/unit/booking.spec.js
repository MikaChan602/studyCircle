import { mount } from '@vue/test-utils'
import booking from '@/views/reservation/booking'


describe('booking.vue',()=>{
    // TODO 初始值驗證
    /**  準備 arrange : 準備好受測目標需要的一切東西 */
    let wrapper,vegetarian

    beforeEach(()=>{
        wrapper = mount(booking)
        vegetarian = wrapper.find('[data-test="vegetarian"]')
        
    })
    it('確認畫面初始狀況',()=>{
        /** 準備 Arrange */ 
        // 1. 確認用參數
        const params = {
            name: "",
            phone: "",
            date: "",
            store: "",
            personNum: "",
            vegetarian: false,
            vegetarianNum: 0,
        }
        // 2. 確認用元素
        const vegetarianNum = wrapper.find('[data-test="vegetarianNum"]')
        /**  斷言 Assert */
        expect(wrapper.vm.params.data).toEqual(params) // 判斷初始參數
        expect(vegetarianNum.isVisible()).toBeFalsy() // 判斷該元素不顯示在畫面上但有渲染


    })
    // TODO 畫面行為確認
    it('畫面行為確認,確認radio btn與吃素人數的顯示。',async()=>{
        /** 準備 Arrange */
        const vegetarianNum = wrapper.find('[data-test="vegetarianNum"]')
        const radio2 =  wrapper.find('[data-test="radio2"]') // 有吃素的radio btn
        /** 操作 Act */ 
        await radio2.trigger('click') // 模擬點擊按鈕

        /** 斷言 Assert */ 
        expect(vegetarianNum.isVisible())

    })
    // TODO 送出錯誤檢查
})