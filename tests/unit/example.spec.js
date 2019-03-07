import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import SmpleFooter from "@/block-template.vue";

describe("block-template.vue", () => {
  it("渲染正确的标记", () => {
    const msg = "test";
    const wrapper = shallowMount(SmpleFooter, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
