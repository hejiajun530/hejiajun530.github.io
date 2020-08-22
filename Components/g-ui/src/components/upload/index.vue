<template>
  <div>
    <div
      class="upload"
      v-if="type == 0"
    >
      <!-- 预览图片 -->
      <div
        class="upload-previewImage"
        v-for="(item, index) in imglist"
        :key="index"
      >
        <img :src="item">
        <span @click="handleClickDel('img', index)">×</span>
      </div>
      <!-- 上传图片按钮 -->
      <div class="upload-file">
        <div class="upload-file-text">上传图片</div>
        <input
          type="file"
          accept="image/*"
          :multiple="multiple"
          class="upload-file-input"
          ref="uploadInput"
          @change="handleChangeUploadImg"
        >
      </div>
    </div>
    <div
      class="uploadFile"
      v-if="type == 2"
    >
      <!-- 预览图片 -->
      <div
        class="upload-filename"
        v-for="(item, index) in fileName"
        :key="index"
      >
        <span>{{item}}</span>
        <span @click="handleClickDel('file', index)">×</span>
      </div>
      <!-- 上传图片按钮 -->
      <div class="upload-file">
        <div class="upload-file-text">上传文件</div>
        <input
          type="file"
          :multiple="multiple"
          class="upload-file-input"
          ref="uploadFileInput"
          @change="handleChangeUploadFile"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "multiple"],
  data() {
    return {
      imglist: [],
      // 文件上传 base64文件
      fileList: [],
      fileName: []
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 图片上传
    handleChangeUploadImg() {
      var _self = this;
      var files = _self.$refs.uploadInput.files;
      // console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
          var reader = new FileReader();
          reader.onload = function(e) {
            // 防止重复上传
            _self.imglist.push(e.srcElement.result);
            // console.log(_self.img);
            _self.$emit("g-uploadList", _self.imglist);
          };
          reader.readAsDataURL(files[i]);
        }
      }
    },
    // 文件上传
    handleChangeUploadFile() {
      var _self = this;
      var files = _self.$refs.uploadFileInput.files;
      // console.log(files);
      for (let i = 0; i < files.length; i++) {
        _self.fileName.push(files[i].name);
        var reader = new FileReader();
        reader.onload = function(e) {
          // 防止重复上传
          _self.fileList.push(e.srcElement.result);
          _self.$emit("g-uploadList", _self.fileList, _self.fileName);
          // console.log(_self.fileList);
        };
        reader.readAsDataURL(files[i]);
      }
    },
    // 删除图片
    handleClickDel(type, index) {
      var _self = this;
      if (type == "img") {
        _self.imglist.splice(index, 1);
        _self.$emit("g-uploadList", _self.imglist);
      } else if (type == "file") {
        _self.fileList.splice(index, 1);
        _self.fileName.splice(index, 1);
        _self.$emit("g-uploadList", _self.fileList, _self.fileName);
      }
    }
  }
};
</script>
<style scoped>
/* 图片 */
.upload {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
}
.upload-previewImage {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 5px 0 0;
  overflow: hidden;
}
.upload-previewImage span {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  line-height: 15px;
  background-color: #dddddd;
  border-radius: 50%;
  cursor: pointer;
}
.upload-previewImage img {
  height: 80px;
}
.upload-file {
  position: relative;
  width: 80px;
  height: 80px;
  border: 1px dashed #cccccc;
  cursor: pointer;
  overflow: hidden;
}
.upload-file::before,
.upload-file::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.upload-file::before {
  width: 20px;
  height: 2px;
  background-color: #666666;
}
.upload-file::after {
  width: 2px;
  height: 20px;
  background-color: #666666;
}
.upload-file-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  text-align: center;
}
.upload-file-input {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
/* 文件 */
.uploadFile {
  margin: 5px;
}
.upload-filename {
  position: relative;
  width: 300px;
  height: 30px;
  background-color: #f5f5f5;
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 5px;
  padding-right: 35px;
}
.upload-filename span:nth-child(1) {
  display: inline-block;
  width: 260px;
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.upload-filename span:nth-child(2) {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
  width: 15px;
  height: 15px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  line-height: 15px;
  background-color: #dddddd;
  border-radius: 50%;
  cursor: pointer;
}
</style>