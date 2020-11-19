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
        <NuxtLink v-for="item in billets" :key="item.flight" :to="`/billets/billet/${item.from}`">
        <div  class="giant-button">
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
        </NuxtLink>
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
