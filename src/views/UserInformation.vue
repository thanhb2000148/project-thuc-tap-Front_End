<template>
    <div class="container light-style flex-grow-1 container-p-y">
      <h4 class="font-weight-bold py-3 mb-4">
        Thông tin tài khoản
      </h4>
      <div class="card overflow-hidden">
        <div class="row no-gutters row-bordered row-border-light">
          <div class="col-md-3 pt-0">
            <div class="list-group list-group-flush account-settings-links">
              <a class="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">Chung</a>
              <a class="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Đổi mật khẩu</a>
              <button type="button" class="btn btn-danger" @click="logout">Đăng xuất</button>
            </div>
          </div>
          <div class="col-md-9">
            <div class="tab-content">
              <div class="tab-pane fade" id="order-tracking">
                
              </div>
              <div class="tab-pane fade active show" id="account-general">
                <div class="card-body media align-items-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt class="d-block ui-w-80">
                  <div class="media-body ml-4">
                    <label class="btn btn-outline-primary">
                      Tải ảnh mới
                      <input type="file" class="account-settings-fileinput">
                    </label> &nbsp;
                    <button type="button" class="btn btn-default md-btn-flat">Đặt lại</button>
                    <div class="text-light small mt-1">Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 800K</div>
                  </div>
                </div>
                <hr class="border-light m-0">
                <div class="card-body">
                  <div class="form-group">
                    <label class="form-label">Họ</label>
                    <input type="text" class="form-control mb-1" v-model="editedUser.lastName">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Tên đệm</label>
                    <input type="text" class="form-control mb-1" v-model="editedUser.middleName">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Tên</label>
                    <input type="text" class="form-control mb-1" v-model="editedUser.firstName">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Số điện thoại</label>
                    <input type="text" class="form-control mb-1" v-model="editedUser.phone">
                  </div>
                  <div class="form-group">
                    <label class="form-label">E-mail</label>
                    <input type="email" class="form-control mb-1" v-model="editedUser.email">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Giới tính</label>
                    <select class="custom-select" v-model="editedUser.gender">
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="account-change-password">
                <div class="card-body pb-2">
                  <div class="form-group">
                    <label class="form-label">Mật khẩu hiện tại</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Mật khẩu mới</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Nhập lại mật khẩu mới</label>
                    <input type="password" class="form-control">
                  </div>
                </div>sss
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right mt-3">
        <button type="button" class="btn btn-primary" @click="saveChanges">Lưu thay đổi</button>&nbsp;
        <button type="button" class="btn btn-default" @click="cancelEdit">Hủy</button>
      </div>
    </div>
  </template>
  
  <script>
  import VueCookies from 'vue-cookies';
  
  export default {
    name: "UserInformation",
    data() {
      return {
        user: {
          lastName: '',
          firstName: '',
          middleName: '',
          phone: '',
          email: '',
          gender: ''
        },
        editedUser: {},
      };
    },
    methods: {
      saveChanges() {
        // Lưu thông tin đã chỉnh sửa
        this.user = { ...this.editedUser };
      },
      cancelEdit() {
        // Hủy bỏ chỉnh sửa và hiển thị lại thông tin người dùng ban đầu
        this.editedUser = { ...this.user };
      },
      logout() {
        // Xóa token đăng nhập từ cookie
        VueCookies.remove('authToken');
        VueCookies.remove('refreshToken'); // Xóa refreshToken nếu có
        // Chuyển hướng người dùng đến trang đăng nhập
        this.$router.push('/login');
      }
    },
    mounted() {
      // Sao chép thông tin người dùng để chỉnh sửa
      this.editedUser = { ...this.user };
    }
  };
  </script>
  
  
  <style scoped>
  body {
    background: #f5f5f5;
    margin-top: 20px;
}

.ui-w-80 {
    width : 80px !important;
    height: auto;
}

.btn-default {
    border-color: rgba(24, 28, 33, 0.1);
    background  : rgba(0, 0, 0, 0);
    color       : #4E5155;
}

label.btn {
    margin-bottom: 0;
}

.btn-outline-primary {
    border-color: #26B4FF;
    background  : transparent;
    color       : #26B4FF;
}

.btn {
    cursor: pointer;
}

.text-light {
    color: #babbbc !important;
}

.btn-facebook {
    border-color: rgba(0, 0, 0, 0);
    background  : #3B5998;
    color       : #fff;
}

.btn-instagram {
    border-color: rgba(0, 0, 0, 0);
    background  : #000;
    color       : #fff;
}

.card {
    background-clip: padding-box;
    box-shadow     : 0 1px 4px rgba(24, 28, 33, 0.012);
}

.row-bordered {
    overflow: hidden;
}

.account-settings-fileinput {
    position  : absolute;
    visibility: hidden;
    width     : 1px;
    height    : 1px;
    opacity   : 0;
}

.account-settings-links .list-group-item.active {
    font-weight: bold !important;
}

html:not(.dark-style) .account-settings-links .list-group-item.active {
    background: transparent !important;
}

.account-settings-multiselect~.select2-container {
    width: 100% !important;
}

.light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}

.light-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}

.material-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}

.material-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}

.dark-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(255, 255, 255, 0.03) !important;
}

.dark-style .account-settings-links .list-group-item.active {
    color: #fff !important;
}

.light-style .account-settings-links .list-group-item.active {
    color: #4E5155 !important;
}

.light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}
  
  </style>
  