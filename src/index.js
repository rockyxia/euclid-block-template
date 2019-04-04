// 导入组件
import blockTemplate from "./block-template.vue";

export default {
  install: function(Vue) {
    Vue.component("blockTemplate", blockTemplate);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("blockTemplate", blockTemplate);
}
