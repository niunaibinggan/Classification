<template>
  <div class="right">
    <table>
      <tr v-for="(item,index) in list"
          :key="index">
        <td v-for="(item,index) in item.cloums"
            :key="index">{{item}}</td>
      </tr>
      <!-- <tr> -->
      <!-- <td v-for="(item,index) in rows"
            :key="index">{{item}}</td> -->
      <!-- </tr> -->
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [
          { cloums: ['a', '23', 'qqq34'] },
          { cloums: ['b', 'dfdfsdf', '44444'] },
        ]
      }
    }
  }
</script>

<style scoped>
  .right {
    width: 100%;
    height: 100%;
  }
</style>