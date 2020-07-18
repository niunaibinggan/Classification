<template>
  <div class="left">
    <p class="left__tips">请将底部数字拖放到相应的 表格中。</p>

    <Upload v-if="!uploadUrl"
            @upload="upload"
            class="left__upload"></Upload>

    <!-- 图片 -->
    <div class="left__content"
         v-if="uploadUrl">
      <div class="left__warpper"
           v-if="uploadType === 'image'">
        <el-popover placement="right"
                    width="50"
                    trigger="hover">
          <div class="left__handel">
            <span @click="enlargeHandel"></span>
            <span @click="deleteHandel"></span>
          </div>
          <el-image class="left__upload-image"
                    :class="{'left__image-enlarge': isEnlarge}"
                    :src="uploadUrl"
                    fit="contain"
                    slot="reference"></el-image>
        </el-popover>

      </div>

      <!-- 音频 -->
      <div class="left__warpper"
           v-if="uploadType === 'audio'">
        <audio :src="uploadUrl"
               class="left__warpper-audio"
               controls="controls">
          您的浏览器不支持 audio 标签。
        </audio>
        <span class="left__delete"
              @click="deleteHandel"></span>
      </div>

      <!-- 视频 -->
      <div class="left__warpper"
           v-if="uploadType === 'video'">
        <video :src="uploadUrl"
               class="left__warpper-video"
               controls="controls">
          您的浏览器不支持 video 标签。
        </video>
        <span class="left__delete"
              @click="deleteHandel"></span>
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
        uploadUrl: '',
        isEnlarge: false
      }
    },
    methods: {
      upload (data) {
        this.uploadType = data.type.split('/')[0]
        this.uploadUrl = data.content

        this.$emit('upload', data)
      },
      enlargeHandel () {
        this.isEnlarge = true
      },
      deleteHandel () {
        this.uploadUrl = ''
        this.uploadType = ''
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
  .left__upload {
    position: absolute;
    left: 80px;
    top: 155px;
    width: 80px;
    height: 63px;
  }

  .left__upload-image {
    width: 60%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .left__image-enlarge {
    width: 85%;
    height: 85%;
  }

  .left__handel {
  }

  .left__handel span {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .left__handel span:nth-of-type(1) {
    margin-left: 20px;
    margin-right: 10px;
    background: url("../static/enlarge.png") no-repeat center center;
    background-size: 100%;
  }

  .left__handel span:nth-of-type(1):hover {
    background: url("../static/enlarge_hover.png") no-repeat center center;
    background-size: 100%;
  }

  .left__handel span:nth-of-type(2) {
    background: url("../static/delete.png") no-repeat center center;
    background-size: 100%;
  }

  .left__handel span:nth-of-type(2):hover {
    background: url("../static/delete_hover.png") no-repeat center center;
    background-size: 100%;
  }

  .left__warpper-audio {
    width: 183px;
    height: 40px;
    margin-top: 40px;
  }

  .left__delete {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: url("../static/delete.png") no-repeat center center;
    background-size: 100%;
    cursor: pointer;
  }

  .left__delete:hover {
    background: url("../static/delete_hover.png") no-repeat center center;
    background-size: 100%;
  }

  .left__warpper-video {
    width: 183px;
    height: 121px;
    margin-top: 10px;
  }
</style>