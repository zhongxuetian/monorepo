var tian = (function (exports, vue) {
    'use strict';

    /**
     * vue3防抖
     */
    function debounceRef(value, delay = 1000) {
        let timer;
        return vue.customRef((track, trigger) => {
            return {
                get() {
                    track();
                    return value;
                },
                set(val) {
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                        value = val;
                        trigger();
                    }, delay);
                }
            };
        });
    }

    exports.debounceRef = debounceRef;

    return exports;

})({}, Vue);
