import { Ref } from "vue";
/**
 * vue3防抖
 */
export declare function debounceRef<T extends any>(value: T, delay?: number): Ref<T>;
