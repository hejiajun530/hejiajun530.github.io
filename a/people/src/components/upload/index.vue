<template>
  <div>
    <div
      class="upload"
      v-if="type == 0"
    >
      <!-- 预览图片  暂时不需要图片预览 -->
      <!-- <div
        class="upload-previewImage"
        v-for="(item, index) in imglist"
        :key="index"
      >
        <img :src="item">
        <span @click="handleClickDel('img', index)">×</span>
      </div> -->
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
      <!-- 预览文件  暂时不需要图片预览 -->
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
  props: {
    type: {
      default: 0
    },
    multiple: {
      default: false
    }
  },
  data() {
    return {
      imglist: [],
      // 文件上传 base64文件
      fileList: [],
      fileName: [],
      // 是否压缩
      compressFlag: false
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
        if (_self.compressFlag) {
          if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
            _self.compress(files[i], function(data) {
              // console.log(data);
              _self.imglist.push(data);
            });
          }
        } else {
          if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
            var reader = new FileReader();
            reader.onload = function(e) {
              _self.imglist = [];
              // 防止重复上传
              _self.imglist.push(e.srcElement.result);
              // console.log(_self.img);
              _self.$emit('g-uploadList', files[i]);
            };
            reader.readAsDataURL(files[i]);
          }
        }
      }
    },
    // 文件上传
    handleChangeUploadFile() {
      var _self = this;
      var files = _self.$refs.uploadFileInput.files;
      // console.log(files);
      for (let i = 0; i < files.length; i++) {
        _self.fileName = [];
        _self.fileName.push(files[i].name);
        var reader = new FileReader();
        reader.onload = function(e) {
          _self.fileList = [];
          // 防止重复上传
          _self.fileList.push(e.srcElement.result);
          _self.$emit('g-uploadList', files[i], _self.fileName);
          // console.log(_self.fileList);
        };
        reader.readAsDataURL(files[i]);
      }
    },
    // 删除图片
    handleClickDel(type, index) {
      var _self = this;
      if (type == 'img') {
        _self.imglist.splice(index, 1);
        _self.$emit('g-uploadList', _self.imglist);
      } else if (type == 'file') {
        _self.fileList.splice(index, 1);
        _self.fileName.splice(index, 1);
        _self.$emit('g-uploadList', _self.fileList, _self.fileName);
      }
    },
    compress(fileObj, callback) {
      var _self = this;
      // console.log(fileObj);
      if (typeof FileReader === 'undefined') {
        console.log('当前浏览器内核不支持base64图标压缩');
      } else {
        try {
          var reader = new FileReader();
          // console.log("reader");
          reader.onload = function(e) {
            // console.log("onload");
            var image = new Image();
            image.src = e.target.result;
            image.onload = function() {
              var canvas = document.createElement('canvas'),
                context = canvas.getContext('2d');
              var x = image.width / 200; //压缩倍数  数越小，压缩越多   同时图片会缩小
              var imageWidth;
              var imageHeight;
              // 当图片宽度大于100就压缩
              if (image.width > 100) {
                imageWidth = image.width / x; //压缩后图片的大小
                imageHeight = image.height / x;
              } else {
                imageWidth = image.width / 1; //不进行压缩大小
                imageHeight = image.height / 1;
              }
              canvas.width = imageWidth;
              canvas.height = imageHeight;
              context.drawImage(image, 0, 0, imageWidth, imageHeight);
              // console.log("drawImage");
              // toDataURL 中第二个参数越小，压缩的越小    同时图片越模糊
              var data = canvas.toDataURL('image/jpeg');
              // var data = canvas.toDataURL("image/jpeg", 0.3);
              var urlFile = _self.convertBase64UrlToBlob(data);
              // console.log(urlFile);
              //压缩完成执行回调
              callback(data);
            };
          };
          reader.readAsDataURL(fileObj);
        } catch (e) {
          console.log('压缩失败!');
        }
      }
    },
    // 用于产看压缩后的图片大小
    convertBase64UrlToBlob(urlData) {
      var arr = urlData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
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
  margin: 0.3125rem;
}
.upload-previewImage {
  position: relative;
  width: 5rem;
  height: 5rem;
  margin: 0 0.3125rem 0 0;
  overflow: hidden;
}
.upload-previewImage span {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 0.9375rem;
  height: 0.9375rem;
  font-size: 0.875rem;
  color: #666666;
  text-align: center;
  line-height: 0.9375rem;
  background-color: #dddddd;
  border-radius: 50%;
  cursor: pointer;
}
.upload-previewImage img {
  height: 5rem;
}
.upload-file {
  position: relative;
  width: 5rem;
  height: 5rem;
  border: 0.0625rem dashed #cccccc;
  cursor: pointer;
  overflow: hidden;
}
.upload-file::before,
.upload-file::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.upload-file::before {
  width: 1.25rem;
  height: 0.125rem;
  background-color: #666666;
}
.upload-file::after {
  width: 0.125rem;
  height: 1.25rem;
  background-color: #666666;
}
.upload-file-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 0.875rem;
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
  margin: 0.3125rem;
}
.upload-filename {
  position: relative;
  width: 18.75rem;
  height: 1.875rem;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  line-height: 1.875rem;
  margin-bottom: 0.3125rem;
  padding-right: 2.1875rem;
}
.upload-filename span:nth-child(1) {
  display: inline-block;
  width: 16.25rem;
  height: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.upload-filename span:nth-child(2) {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0.3125rem;
  transform: translate(0, -50%);
  width: 0.9375rem;
  height: 0.9375rem;
  font-size: 0.875rem;
  color: #666666;
  text-align: center;
  line-height: 0.9375rem;
  background-color: #dddddd;
  border-radius: 50%;
  cursor: pointer;
}
</style>