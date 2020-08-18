new Vue({
  el: '#app',
  data() {
    return {
      imglist: [],
      // 文件上传 base64文件
      fileList: [],
      fileName: []
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
    }
  }
})