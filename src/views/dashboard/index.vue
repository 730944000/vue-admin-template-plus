<template>
  <div class="dashboard-container">
    <p>
      <label>请选择一个文件：</label>
      <input id="file" type="file">
      <input type="button" value="读取图像" @click="readAsDataURL">
      <input
        type="button"
        value="读取二进制数据"
        @click="readAsBinaryString"
      >
      <input type="button" value="读取文本文件" @click="readAsText">
    </p>
    <div id="result" name="result">
      <!-- 这里用来显示读取结果 -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Example1',
  data: function() {
    return {
      result: '',
      file: ''
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  created() {
    this.result = document.getElementById('result')
  },
  methods: {
    readAsDataURL() {
      // 检查是否为图像文件
      this.file = document.getElementById('file').files[0]
      if (!/image\/\w+/.test(this.file.type)) {
        alert('请确保文件为图像类型')
        return false
      }
      var reader = new FileReader()
      // 将文件以Data URL形式进行读入页面
      reader.readAsDataURL(this.file)
      reader.onload = function(e) {
        var res = document.getElementById('result')
        // 在页面上显示文件
        res.innerHTML = '<img src="' + this.result + '" alt=""/>'
      }
    },
    // 将文件以二进制形式进行读入页面
    readAsBinaryString() {
      this.file = document.getElementById('file').files[0]
      var reader = new FileReader()
      // 将文件以二进制形式进行读入页面
      reader.readAsBinaryString(this.file)
      reader.onload = function(f) {
        const res = document.getElementById('result')
        // 在页面上显示二进制数据
        res.innerHTML = this.result
      }
    },
    // 将文件以文本形式进行读入页面
    readAsText() {
      this.file = document.getElementById('file').files[0]
      var reader = new FileReader()
      // 将文件以文本形式进行读入页面
      reader.readAsText(this.file)
      reader.onload = function(f) {
        const res = document.getElementById('result')
        // 在页面上显示读入文本
        res.innerHTML = this.result
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
