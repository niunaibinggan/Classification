<template>
  <div class="left">
    <p class="left__tips">请将底部数字拖放到相应的 表格中。</p>

    <Upload v-if="!uploadUrl"
            @upload="upload"
            class="root__upload"></Upload>

    <div class="left__content"
         v-if="uploadType">
      <div class="left__warpper"
           v-if="uploadType === 'image'">
        <el-popover placement="right"
                    width="50"
                    trigger="hover">
          <div class="root__handel">
            <span class=""></span>
            <span></span>
          </div>
          <el-image class="root__upload-image"
                    :src="uploadUrl"
                    fit="contain"
                    slot="reference"></el-image>
        </el-popover>

      </div>

    </div>
  </div>
</template>

<script>
  import Upload from "./Upload.vue"
  export default {
    components: { Upload },
    data () {
      return {
        uploadType: '',
        uploadUrl: ''
      }
    },
    methods: {
      upload (data) {
        this.uploadType = RegExp(/image/).test(data.type) ? 'image' : 'video'
        this.uploadUrl = data.content
      }
    }
  }
</script>

<style scoped>
  .left {
    width: 100%;
    height: 100%;
    background: url("../static/left_bg.png") no-repeat center center;
    background-size: auto 90%;
    overflow: hidden;
    padding: 30px;
    position: relative;
  }
  .left__tips {
    margin: 10px 10px 0;
    font-size: 14px;
    color: #fff;
  }
  .left__content {
    position: absolute;
    width: 188px;
    height: 140px;
    left: 26px;
    top: 115px;
    background: #004e8b;
  }
  .left__warpper {
    width: 188px;
    height: 140px;
    position: relative;
  }
  .root__upload {
    position: absolute;
    left: 80px;
    top: 155px;
    width: 80px;
    height: 63px;
  }

  .root__upload-image {
    width: 50%;
    height: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .root__handel {
    background: url("../static/left_bg.png") no-repeat center center;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>