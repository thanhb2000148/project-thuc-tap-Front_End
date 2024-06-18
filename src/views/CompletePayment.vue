<template>
  <div class="jumbotron text-center">
    <h1 class="display-3">Cản ơn bạn đã mua hàng!</h1>
    <p class="lead">
      <strong>Please check your email</strong> for further instructions on how
      to complete your account setup.
    </p>
    <hr />
    <p>Having trouble? <a href="#">Contact us</a></p>
    <p class="lead">
      <a
        class="btn btn-primary btn-sm"
        href="#"
        role="button"
        @click="backHome()"
        >Quay trở về trang chủ</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "ThankPayment",
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
