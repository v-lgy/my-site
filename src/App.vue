<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left-container">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mix.less";
.app-container {
  .self-fill(fixed);
  .left-container {
    width: 250px;
    height: 100%;
    position: relative;
  }
}
</style>