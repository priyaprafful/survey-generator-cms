<template>
  <section>
    <div class="flex justify-center h-almost max-w-screen-xl m-auto p-12">
      <div class="flex">
        <Block half class="flex flex-col justify-center">
          <div class="z-10">
            <h1 class="text-5xl leading-tight mb-6 gradientText">
              {{ $prismic.asText(data.headline) }}
            </h1>
            <p class="text-lg leading-relaxed mb-8">
              {{ $prismic.asText(data.description) }}
            </p>

            <div class="flex items-center">
              <MainBtn :text="$t('menu.book_demo')" to="boka-demo" cta />
              <MainBtn :text="$t('common.get_quote')" :to="'offert'" />
            </div>
          </div>
        </Block>

        <Block half class="flex relative">
          <div class="dots absolute top-0 left-0 right-0 bottom-0" />
          <div class="flex justify-end w-full z-10">
            <img
              src="@/assets/svgs/platform.svg"
              alt="Platform"
              class="w-3/4"
            />
          </div>
        </Block>
      </div>
    </div>

    <div class="max-w-screen-xl m-auto px-12 pb-12">
      <div class="flex justify-between items-end">
        <img src="@/assets/svgs/demoskop.svg" alt="Demoskop" class="demoskop" />
        <img
          src="@/assets/svgs/fhm2.svg"
          alt="Folkhälsomyndigheten"
          class="logo"
        />
        <img
          src="@/assets/svgs/skr.svg"
          alt="Sveriges Kommuner och Regioner"
          class="logo"
        />
        <img src="@/assets/svgs/saco.svg" alt="Saco" class="logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.gradientText {
  background: linear-gradient(to right, hsl(212, 63%, 23%), hsl(199, 66%, 55%));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dots {
  background-image: radial-gradient(#aad7ed 1.5px, #eef7fb 1.5px);
  background-size: calc(25px) calc(25px);
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
}

.logo {
  height: 4rem;
}

.demoskop {
  height: 2.5rem;
}
</style>
