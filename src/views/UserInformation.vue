<template>
  <div class="container light-style flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-4">
      Thông tin tài khoản
    </h4>
    <div v-if="message" :class="['alert', alertClass]" role="alert">
      {{ message }}
    </div>
    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-3 pt-0">
          <div class="list-group list-group-flush account-settings-links">
            <a class="list-group-item list-group-item-action" href="#account-general" @click="selectTab('general')">Thông tin tài khoản</a>
            <a class="list-group-item list-group-item-action" href="#account-change-password" @click="selectTab('change-password')">Đổi mật khẩu</a>
            <a class="list-group-item list-group-item-action" href="#shipping-address" @click="selectTab('shipping-address')">Địa chỉ giao hàng</a>
            <button type="button" class="btn btn-danger mt-3" @click="logout">Đăng xuất</button>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <div class="tab-pane fade" id="order-tracking"></div>
            <div class="tab-pane fade" :class="{ 'active show': selectedTab === 'general' }" id="account-general">
              <div class="card-body media align-items-center">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Avatar" class="d-block ui-w-80">
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
                  <label for="lastName" class="form-label">Họ</label>
                  <input id="lastName" type="text" class="form-control" v-model="editedUser.lastName">
                </div>
                <div class="form-group">
                  <label for="middleName" class="form-label">Tên đệm</label>
                  <input id="middleName" type="text" class="form-control" v-model="editedUser.middleName">
                </div>
                <div class="form-group">
                  <label for="firstName" class="form-label">Tên</label>
                  <input id="firstName" type="text" class="form-control" v-model="editedUser.firstName">
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">Số điện thoại</label>
                  <input id="phone" type="text" class="form-control" v-model="editedUser.phone">
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">E-mail</label>
                  <input id="email" type="email" class="form-control" v-model="editedUser.email">
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
            <div class="tab-pane fade" :class="{ 'active show': selectedTab === 'change-password' }" id="account-change-password">
              <div class="card-body pb-2">
                <div class="form-group">
                  <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
                  <input id="currentPassword" type="password" class="form-control">
                </div>
                <div class="form-group">
                  <label for="newPassword" class="form-label">Mật khẩu mới</label>
                  <input id="newPassword" type="password" class="form-control">
                </div>
                <div class="form-group">
                  <label for="confirmPassword" class="form-label">Nhập lại mật khẩu mới</label>
                  <input id="confirmPassword" type="password" class="form-control">
                </div>
              </div>
            </div>
            <div class="tab-pane fade" :class="{ 'active show': selectedTab === 'shipping-address' }" id="shipping-address">
              <div class="card-body">
                <div class="form-group" v-for="(address, index) in editedUser.addresses" :key="index">
                  <input type="text" class="form-control mb-3" v-model="address.province" placeholder="Tỉnh/Thành phố">
                  <input type="text" class="form-control mb-3" v-model="address.district" placeholder="Quận/Huyện">
                  <input type="text" class="form-control mb-3" v-model="address.commune" placeholder="Phường/Xã">
                  <input type="text" class="form-control mb-3" v-model="address.desc" placeholder="Địa chỉ">
                  <button type="button" class="btn btn-danger btn-sm" @click="deleteAddress(address.id, index)">Xóa địa chỉ</button>
                </div>
                <button type="button" class="btn btn-success" @click="createNewAddress">Thêm địa chỉ mới</button>
              </div>
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
import AddressService from "@/services/addresses.service";

export default {
  name: "UserInformation",
  data() {
    return {
      editedUser: {
        lastName: '',
        middleName: '',
        firstName: '',
        phone: '',
        email: '',
        gender: 'male', // Giới tính mặc định
        addresses: []
      },
      selectedTab: 'general',
      message: '',
      alertClass: ''
    };
  },
  methods: {
    async createNewAddress() {
        try {
            const newAddress = {
                province: '',
                district: '',
                commune: '',
                desc: ''
            };

            // Kiểm tra dữ liệu đầu vào trước khi gửi yêu cầu
            if (!newAddress.province || !newAddress.district || !newAddress.commune || !newAddress.desc) {
                throw new Error("Tất cả các trường là bắt buộc.");
            }

            const createdAddress = await AddressService.createAddress(newAddress);
            if (createdAddress) {
                this.editedUser.addresses.push(createdAddress);
                this.message = "Đã thêm địa chỉ mới thành công.";
                this.alertClass = "alert-success";
            } else {
                throw new Error("Response từ server không hợp lệ khi tạo địa chỉ.");
            }
        } catch (error) {
            console.error("Error creating address:", error);
            this.message = "Có lỗi xảy ra khi thêm địa chỉ: " + error.message;
            this.alertClass = "alert-danger";
        }
    },

    async deleteAddress(id, index) {
      try {
        await AddressService.deleteAddress(id);
        this.editedUser.addresses.splice(index, 1);
        this.message = "Đã xóa địa chỉ thành công.";
        this.alertClass = "alert-success";
      } catch (error) {
        console.error("Error deleting address:", error);
        this.message = "Có lỗi xảy ra khi xóa địa chỉ.";
        this.alertClass = "alert-danger";
      }
    },

    async fetchAddresses() {
      try {
        const response = await AddressService.getAddress();
        if (Array.isArray(response)) {
          this.editedUser.addresses = response;
          this.message = "Đã tải danh sách địa chỉ thành công!";
          this.alertClass = "alert-success";
        } else {
          console.error("Response from getAddresses() is not an array:", response);
          this.message = "Lỗi: Dữ liệu địa chỉ không hợp lệ từ server.";
          this.alertClass = "alert-danger";
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
        this.message = "Có lỗi xảy ra khi tải danh sách địa chỉ.";
        this.alertClass = "alert-danger";
      }
    },

    async logout() {
      try {
        VueCookies.remove('access_token');
        VueCookies.remove('refresh_token');
        this.$router.push('/login');
      } catch (error) {
        console.error("Error logging out:", error);
        this.message = "Có lỗi xảy ra khi đăng xuất.";
        this.alertClass = "alert-danger";
      }
    },

    selectTab(tab) {
      this.selectedTab = tab;
    },

    async saveChanges() {
      try {
        // Ở đây bạn có thể thực hiện lưu các thay đổi của editedUser lên server
        // Ví dụ:
        // const response = await YourService.saveChanges(this.editedUser);
        this.message = "Đã lưu thay đổi thành công.";
        this.alertClass = "alert-success";
      } catch (error) {
        console.error("Error saving changes:", error);
        this.message = "Có lỗi xảy ra khi lưu thay đổi.";
        this.alertClass = "alert-danger";
      }
    },

    cancelEdit() {
      // Xử lý hủy bỏ chỉnh sửa và khôi phục dữ liệu ban đầu
      this.resetEditedUser();
      this.message = "";
      this.alertClass = "";
    },

    resetEditedUser() {
      // Đưa editedUser về trạng thái rỗng hoặc trạng thái ban đầu
      this.editedUser = {
        lastName: '',
        middleName: '',
        firstName: '',
        phone: '',
        email: '',
        gender: 'male',
        addresses: []
      };
    }
  },

  mounted() {
    this.fetchAddresses();
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
  