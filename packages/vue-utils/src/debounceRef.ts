import {customRef, Ref} from "vue"

/**
 * vue3防抖
 */
export function debounceRef<T extends any> (value:T, delay:number=1000):Ref<T>{
    let timer:number;
    return customRef((track,trigger)=>{
        return {
            get() {
                track()
                return value
            },
            set(val:any){
                clearTimeout(timer)
                timer = setTimeout(()=>{
                    value = val
                    trigger()
                },delay)
            }
        }
    })
}
