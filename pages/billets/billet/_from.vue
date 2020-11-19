<template>
  <div class="container">
    <div class="toolbar">
        <NuxtLink to="/">
      <Logo />
      </NuxtLink>
    </div>
    <div class="box">
      <div v-if="billet" class="ticket">
        <span class="airline">Boarding Pass</span>
        <span class="airline-sub">{{ billet.class }}</span>
        <span class="airline airlineslip">Boarding pass</span>
        <span class="airline-sub airlineslip">{{ billet.class }}</span>
        <div class="content-ticket">
            <span class="name">PASSENGER NAME<br><span>{{ billet.passenger }}</span></span>

              <span class="flight">FLIGHT<br><span>{{ billet.flight }}</span></span>
              <span class="from">FROM<br><span>{{ billet.from }}</span></span>
              <span class="to">TO<br><span>{{ billet.to }}</span></span>
              <span class="class">CLASS<br><span>{{ billet.class }}</span></span>
              <span class="gate">GATE<br><span>{{ billet.gate }}</span></span>
              <span class="time">TIME<br><span>{{ billet.time }}</span></span>
              <span class="seat">SEAT<br><span>{{ billet.seat }}</span></span>

            
                
            <!-- <span class="flight flightslip">FLIGHT N&deg;<br><span>{{ billet.flight }}</span></span>
            <span class="seat seatslip">SEAT<br><span>{{ billet.seat }}</span></span> -->
            <span class="name nameslip">PASSENGER NAME<br><span>{{ billet.passenger }}</span></span>
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
      setBillet: "billet/setBillet",
    }),
  },
  computed:{
    ...mapGetters({
      billet: "billet/getBillet",
    }),
  },
  mounted() {
      this.setBillet(this.$route.params.from);
  },
}
</script>

<style lang="scss">
.box{
  position: absolute;
  top: calc(50% - 250px);
  top: -webkit-calc(50% - 250px);
  left: calc(50% - 400px);
  left: -webkit-calc(50% - 400px);
  // -webkit-transform: scale(0.7) rotate(-5deg);
}

.ticket{
  width: 900px;
  height: 350px;
  background: deepskyblue;
  border-radius: 20px;
  box-shadow: 0 0 10px #aaa;
}

.ticket:after{
  content: '';
  position: absolute;
  right: 200px;
  top: 0px;
  width: 2px;
  height: 350px;
  color:gray;
  border:dashed 1px;
}

.content-ticket{
  position: absolute;
  top: 60px;
  width: 100%;
  height: 250px;
  background: #eee;
}

.airline{
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial;
  font-size: 20px;
  color: white;
}

.airline-sub{
  position: absolute;
  top: 30px;
  left: 10px;
  font-family: Arial;
  font-size: 15px;
  color: white;
}

.boarding{
  position: absolute;
  right: 220px;
  font-family: Arial;
  font-size: 18px;
  color: rgba(255,255,255,0.6);
}

.sub-content{
  background: #e5e5e5;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 70px;
}

.name{
  position: absolute;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.name span{
  color: #555;
  font-size: 17px;
}

.flight{
  position: absolute;
  left: 10px;
  top: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.flight span{
  color: #555;
  position: fixed;
  font-size: 17px;
}

.from{
  position: absolute;
  left: 180px;
  top: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.from span{
  color: #555;
  position: fixed;
  font-size: 17px;
}

.to{
  position: absolute;
  left: 360px;
  top: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.to span{
  color: #555;
  position: fixed;
  font-size: 17px;
}

.class{
  position: absolute;
  left: 560px;
  top: 100px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.class span{
  color: #555;
  position: fixed;
  font-size: 17px;
}

.gate{
  position: absolute;
  top: 200px;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.gate span{
  color: #555;
  font-size: 17px;
}

.time{
  position: absolute;
  top: 200px;
  left: 150px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.time span{
  color: #555;
  font-size: 17px;
}

.seat{
  position: absolute;
  top: 200px;
  left: 350px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
}

.seat span{
  color: #555;
  font-size: 17px;
}

.slip{
  left: 455px;
}

.nameslip{
  left: 710px;
}

.airlineslip{
  left: 710px;
}
</style>
