<template>
  <Wrapper class="overflow-visible">
    <Container class="overflow-visible">
      <div class="flex">
        <Block half class="leading-loose">
          <IconWrapper square>
            <PriceTagsIcon class="overflow-visible" />
          </IconWrapper>

          <prismic-rich-text :field="data.intro_title" class="mb-6" />
          <prismic-rich-text :field="data.intro_content" class="rich-text" />
        </Block>

        <Block half>
          <VueStyledShadows
            color1="#aad7ed"
            pattern-size="2"
            bg-size="25"
            margin="40"
          >
            <prismic-image v-if="data.intro_image" :field="data.intro_image" />
          </VueStyledShadows>
        </Block>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import PriceTagsIcon from '@/assets/svgs/price-tags.svg?inline';

export default {
  components: {
    PriceTagsIcon,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.tagWiggle();
  },
  methods: {
    tagWiggle() {
      this.$gsap.timeline({ repeat: -1 }).to('#pricetag', 1, {
        delay: 10,
        rotation: '-90',
        ease: 'Power1.easeInOut',
        repeat: 3,
        yoyo: true,
        transformOrigin: '100% 0%',
      });
    },
  },
};
</script>
