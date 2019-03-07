<template>
  <div class="block-template">
    <basic-container>
      欢迎使用 euclid-devtools 开发物料<br><br>
      {{msg}}
    </basic-container>
  </div>
</template>

<script>
import BasicContainer from "@euclidui/basic-container"
export default {
  components: { BasicContainer },
  name: "blockTemplate",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.block-template {
  padding: 20px;
}
</style>
