new Vue({
  el: '#app',
  data() {
    return {
      imglist: [],
      // 文件上传 base64文件
      fileList: [],
      fileName: [],
      compressFlag: true
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 图片上传
    handleChangeUploadImg() {
      var _self = this;
      var files = _self.$refs.uploadInput.files;
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (_self.compressFlag) {
          _self.compress(files[i], function (data) {
            // console.log(data);
            _self.imglist.push(data);
          });
        } else {
          if (/\.(jpe?g|png|gif)$/i.test(files[i].name)) {
            var reader = new FileReader();
            reader.onload = function (e) {
              // 防止重复上传
              _self.imglist.push(e.srcElement.result);
              // console.log(_self.img);
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
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        _self.fileName.push(files[i].name);
        var reader = new FileReader();
        reader.onload = function (e) {
          // 防止重复上传
          _self.fileList.push(e.srcElement.result);
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
      } else if (type == 'file') {
        _self.fileList.splice(index, 1);
        _self.fileName.splice(index, 1);
      }
    },
    compress(fileObj, callback) {
      var _self = this;
      // console.log(fileObj);
      if (typeof FileReader === "undefined") {
        console.log("当前浏览器内核不支持base64图标压缩");
      } else {
        try {
          var reader = new FileReader();
          // console.log("reader");
          reader.onload = function (e) {
            // console.log("onload");
            var image = new Image();
            image.src = e.target.result;
            image.onload = function () {
              var canvas = document.createElement("canvas"),
                context = canvas.getContext("2d");
              var x = image.width / 300; //压缩倍数  数越小，压缩越多   同时图片会缩小
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
              var data = canvas.toDataURL("image/jpeg");
              var urlFile = _self.convertBase64UrlToBlob(data);
              console.log(urlFile);
              //压缩完成执行回调
              callback(data);
            };
          };
          reader.readAsDataURL(fileObj);
        } catch (e) {
          console.log("压缩失败!");
        }
      }
    },
    // 用于产看压缩后的图片大小
    convertBase64UrlToBlob(urlData) {
      var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
  }
})