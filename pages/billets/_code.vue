<template>
  <div class="container">
    <div class="toolbar">
        <NuxtLink to="/">
      <Logo />
      </NuxtLink>
    </div>
    <div class="content">
      <div>
        <h1 class="title">Choose your billet...</h1>
        <div v-for="item in billets" :key="item.flight" class="giant-button">
            {{ item.passenger }} <br>
            {{ item.flight }} <br>
            {{ item.from }} <br>
            {{ item.to }} <br>
            {{ item.class }} <br>
            {{ item.gate }} <br>
            {{ item.time }} <br>
            {{ item.seat }} <br>
            {{ item.number }} <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchBillets: "billet/fetchBillets",
    }),
  },
  computed:{
    ...mapGetters({
      billets: "billet/getBillets",
    }),
  },
  mounted() {
      this.fetchBillets(this.$route.params.code);
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
