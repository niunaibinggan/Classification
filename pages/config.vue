<template>
  <div class="root">
    <div class="root__container">
      <h3 class="root__title">
        <input type="text"
               placeholder="请输入标题" />
      </h3>

      <div class="root__warpper">
        <config-left class="root__left"
                     @upload="upload"></config-left>
        <config-right class="root__right"></config-right>
      </div>
    </div>
  </div>
</template>

<script>
  import ConfigLeft from '~/components/ConfigLeft.vue'
  import ConfigRight from '~/components/ConfigRight.vue'
  export default {
    components: {
      ConfigLeft,
      ConfigRight
    },
    data () {
      return {
        questions: {
          upload: {}
        }
      }
    },
    methods: {
      upload (data) {
        this.questions.upload = data
      }
    }
  }
</script>
<style scoped>
  .root {
    width: 100%;
    min-width: 1000px;
  }

  .root__container {
    overflow: hidden;
    margin: 10px auto;
    width: 900px;
    height: 500px;
    background: url("../static/bg.png") no-repeat top left;
    background-size: 100%;
  }
  .root__title {
    text-align: center;
    margin-top: 1%;
  }

  .root__title input {
    padding: 3px 5px;
    text-align: center;
    width: 21%;
  }

  .root__warpper {
    margin: 4% auto 0;
    width: 90%;
    height: 60%;
  }

  .root__left {
    width: 30%;
    height: 95%;
    float: left;
  }

  .root__right {
    width: 67%;
    height: 95%;
    float: right;
    margin-right: 10px;
  }
</style>