<template>
  <fileuUpload class="g-upload"
               v-model="files"></fileuUpload>
</template>

<script>
  import fileuUpload from 'vue-upload-component'
  export default {
    components: {
      fileuUpload
    },
    data () {
      return {
        files: []
      }
    },
    watch: {
      files (val) {
        if (!val.length || !val[0].file) { return false }
        const { type, size, name } = val[0]
        const TAG_DIC = {
          image: 'img',
          video: 'video',
          audio: 'audio',
        }
        const fileType = (/^(.*)\//.exec(type) || [])[1]
        const tag = TAG_DIC[fileType]

        if (!tag) {
          this.$message({
            message: `只支持图片/视频/音频哦`,
            type: 'warning'
          })
          return false
        }

        const reader = new FileReader()

        reader.readAsDataURL(val[0].file)

        reader.onload = (e) => {
          this.$emit('upload', {
            content: e.target.result,
            type: val[0].file.type
          })
        }
      }
    }
  }
</script>