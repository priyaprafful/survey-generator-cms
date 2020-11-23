<template>
  <SGBackground border>
    <SGSection>
      <div class="text-center leading-loose mb-16">
        <prismic-rich-text :field="data.intro_title" />
      </div>

      <SGBlockWrapper
        v-for="(section, index) in data.intro_sections"
        :key="index"
        :index="index"
        class="leading-relaxed"
      >
        <SGBlock :index="index">
          <prismic-rich-text
            :field="section.title"
            class="text-lg text-blue-4 mb-6"
          />
          <prismic-rich-text :field="section.content" class="rich-text" />
        </SGBlock>

        <SGBlock :index="index">
          <VueStyledShadows
            :position="index % 2 === 0 ? 'bottomLeft' : 'bottomRight'"
            color1="#aad7ed"
            pattern-size="2"
            bg-size="25"
            margin="40"
          >
            <prismic-image v-if="section.image" :field="section.image" />
          </VueStyledShadows>
        </SGBlock>
      </SGBlockWrapper>

      <div
        class="flex bg-blue-9 text-white p-6 shadow-card rounded-md leading-relaxed relative"
      >
        <div class="abstract" />

        <div class="flex items-center justify-evenly z-10">
          <prismic-rich-text
            :field="data.demo_title"
            class="text-blue-1 text-lg"
          />
          <prismic-rich-text
            :field="data.demo_content"
            class="rich-text text-sm w-1/2 mx-6"
          />
          <SGButton
            global
            :to="data.demo_url.url"
            :label="$prismic.asText(data.demo_button)"
            color="blue-light"
            chevron
          />
        </div>
      </div>
    </SGSection>
  </SGBackground>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.parallax();
  },
  methods: {
    parallax() {
      this.$gsap.utils.toArray('.vue-styled-shadows img').forEach((elem) => {
        this.$gsap.to(elem, {
          y: -25,
          scrollTrigger: {
            trigger: elem,
            start: 'top 75%',
            end: 'bottom',
            scrub: true,
            // markers: process.env.NODE_ENV !== 'production',
          },
        });
      });
    },
  },
};
</script>
