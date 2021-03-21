<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <!-- slider -->
          <div class="product-slider VueCarousel-inner">
            <carousel
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img :src="slide.img" :alt="product.name" />
              </slide>
            </carousel>
          </div>
          <!-- content -->
          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //id: this.$route.params.id,
      product: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
    //console.log(product);
  },
};
</script>

<style lang="scss">
.VueCarousel-inner {
  visibility: visible !important;
  flex-basis: 100% !important;
  width: 100% !important;
}
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-content {
  min-width: 48%;
  text-align: center;
  margin: 30px;
  width: 100%;
}
</style>
