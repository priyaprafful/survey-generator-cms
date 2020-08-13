<template>
  <section class="mainGradient overflow-hidden">
    <div class="flex justify-center h-almost max-w-screen-xl m-auto p-12">
      <div class="flex">
        <Block half class="flex flex-col justify-center relative">
          <div class="z-10">
            <h1 class="text-5xl leading-tight mb-6 gradientText">
              {{ $prismic.asText(data.headline) }}
            </h1>
            <p class="text-lg leading-relaxed mb-8">
              {{ $prismic.asText(data.description) }}
            </p>

            <div class="flex items-center">
              <MainBtn :text="$t('menu.book_demo')" to="boka-demo" cta />
              <MainBtn :text="$t('common.get_quote')" :to="'kontakt'" />
            </div>
          </div>

          <svg
            fill="none"
            viewBox="0 0 404 384"
            width="404"
            height="384"
            class="absolute bottom-0 right-1/2 transform -translate-x-32 text-gray-200 fill-current"
          >
            <defs>
              <pattern
                id="shape1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="inherit"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#shape1)"></rect>
          </svg>
        </Block>

        <Block half class="flex relative">
          <div class="dots absolute top-0 left-0 right-0 bottom-0 -mr-16" />
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

    <div class="max-w-screen-xl m-auto p-12">
      <div class="flex justify-between">
        <img src="@/assets/svgs/seb.svg" alt="SEB" class="h-8" />
        <img src="@/assets/svgs/saco.svg" alt="Saaco" class="h-8" />
        <img src="@/assets/svgs/assaabloy.svg" alt="Assa Abloy" class="h-8" />
        <img
          src="@/assets/svgs/swedishmatch.svg"
          alt="Swedish Match"
          class="h-8"
        />
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
  background-image: linear-gradient(transparent 2px, #ddeff8 2px);
  background-size: calc(10 * 2px) calc(10 * 2px);
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
}
</style>
