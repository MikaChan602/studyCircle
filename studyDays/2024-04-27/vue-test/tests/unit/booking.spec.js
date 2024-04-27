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
            store: "",
            personNum: "",
            vegetarian: false,
            vegetarianNum: "",
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
        const radio1 =  wrapper.find('[data-test="radio1"]') // 有吃素的radio btn
        /** 操作 Act */ 
        await radio1.setValue('true') // 模擬點擊按鈕
        
        /** 斷言 Assert */ 
        expect(radio1.element.value).toBe('true')
        expect(vegetarianNum.isVisible())

    })
    // TODO 送出錯誤檢查
    
    it('確認使用者是否能正常輸入',async()=>{
        /* 準備 Arrange */
        const nameInput = wrapper.find('[data-test="name"]')
        const phoneInput = wrapper.find('[data-test="phone"]')
        const storeSelect = wrapper.find('[data-test="selector"]')
        const peopleInput = wrapper.find('[data-test="people"]')
        const radio1 =  wrapper.find('[data-test="radio1"]') 
        // TODO radio
        const vegetarianNumInput = wrapper.find('[data-test="vegetarianNum"]')

        /* 操作 */
        await nameInput.setValue('Anna') // 賦予值
        await phoneInput.setValue('0989123123')
        await storeSelect.setValue('壽司郎')
        await peopleInput.setValue('3')
        await radio1.setValue('true') // 模擬點擊按鈕
        await vegetarianNumInput.setValue('1')
        // await storeInput.setValue()
        /* 斷言 */
        expect(nameInput.element.value).toBe('Anna') // 取得DOM元素的內容
        expect(phoneInput.element.value).toBe('0989123123')
        expect(storeSelect.element.value).toEqual('壽司郎')
        expect(peopleInput.element.value).toBe('1')
        expect(radio1.element.value).toBe('true')
        expect(vegetarianNumInput.element.value).toBe('1')
        
        
        // wrapper.find('[data-test=""]')
    })
    it('確認清除功能',async()=>{
        /* 準備 Arrange */
        const nameInput = wrapper.find('[data-test="name"]')
        const phoneInput = wrapper.find('[data-test="phone"]')
        const storeSelect = wrapper.find('[data-test="selector"]')
        const peopleInput = wrapper.find('[data-test="people"]')
        const radio1 =  wrapper.find('[data-test="radio1"]') 
        const clearBtn = wrapper.find('[data-test="clear"]')
        const params = {
            name: "",
            phone: "",
            store: "",
            personNum: "",
            vegetarian: false,
            vegetarianNum: "",
        }
        // TODO radio
        const vegetarianNumInput = wrapper.find('[data-test="vegetarianNum"]')

        /* 操作 */
        await nameInput.setValue('Anna') // 賦予值
        await phoneInput.setValue('0989123123')
        await storeSelect.setValue('')
        await peopleInput.setValue('3')
        await radio1.setValue('true') // 模擬點擊按鈕
        await vegetarianNumInput.setValue('1')
        await clearBtn.trigger('click')

        /* 斷言 ..........................*/
        expect(wrapper.vm.params.data).toEqual(params) 

        
        // wrapper.find('[data-test=""]')
    })

    

})