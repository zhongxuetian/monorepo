'use strict';

var vue = require('vue');

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
