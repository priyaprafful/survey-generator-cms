<template>
  <section class="bg-bgMain cta-bg">
    <SGSection>
      <div class="flex">
        <SGBlock>
          <h2 class="mb-4">Vill du veta mer?</h2>
          <p class="mb-8 leading-relaxed">
            Att komma igång med Survey Generator är smidigt, du kan snabbt och
            enkelt integrera verktyget med andra eventuella system och börja
            skapa enkäter och rapporter.
          </p>

          <div class="flex items-center">
            <SGButton
              color="yellow-light"
              size="medium"
              :label="$t('menu.book_demo')"
              to="book-demo"
            />
            <SGButton
              color="transparent"
              size="medium"
              :label="$t('common.get_quote')"
              to="get-quote"
            />
          </div>
        </SGBlock>

        <SGBlock class="flex">
          <div class="flex flex-col ml-4">
            <IconWrapper square>
              <ShapesIcon class="overflow-visible" />
            </IconWrapper>
            <h3 class="mb-2 leading-normal">Flexibelt & effektivt</h3>
            <p class="leading-relaxed mb-4">
              Lite som att skapa ett eget verktyg, men allt du behöver finns
              redan på plats.
            </p>
            <SGButton
              class="mt-auto"
              color="transparent"
              size="none"
              label="Mer om verktyget"
              to="platform"
            />
          </div>

          <div class="flex flex-col ml-4">
            <IconWrapper square>
              <PriceTagsIcon class="overflow-visible" />
            </IconWrapper>
            <h3 class="mb-2 leading-normal">Kostnadseffektivt</h3>
            <p class="leading-relaxed mb-4">
              Välj bland olika abonnemang och prisplaner eller skräddarsy.
            </p>
            <SGButton
              class="mt-auto"
              color="transparent"
              size="none"
              label="Våra priser"
              to="pricing"
            />
          </div>
        </SGBlock>
      </div>
    </SGSection>
  </section>
</template>

<script>
import PriceTagsIcon from '@/assets/svgs/price-tags-cta.svg?inline';
import ShapesIcon from '@/assets/svgs/shapes.svg?inline';

export default {
  components: {
    PriceTagsIcon,
    ShapesIcon,
  },
  mounted() {
    this.moveShapes();
  },
  methods: {
    moveShapes() {
      this.$gsap
        .timeline({ repeat: -1 })
        .to('#pricetag-cta', 1, {
          delay: 10,
          rotation: '-90',
          ease: 'Power1.easeInOut',
          repeat: 3,
          yoyo: true,
          transformOrigin: '100% 0%',
        })
        .to('#shape-circle', 1, {
          x: 40,
          rotate: 160,
          transformOrigin: '50% 50%',
        })
        .to(
          '#shape-square',
          1,
          { y: -40, x: -20, rotate: 180, transformOrigin: '50% 50%' },
          '-=1'
        )
        .to(
          '#shape-triangle',
          1,
          { y: 45, x: -15, rotate: 120, transformOrigin: '50% 50%' },
          '-=1'
        )
        .to('#pricetag-cta', 1, {
          delay: 10,
          rotation: '-90',
          ease: 'Power1.easeInOut',
          repeat: 3,
          yoyo: true,
          transformOrigin: '100% 0%',
        })
        .to('#shape-circle', 1, {
          y: -40,
          x: 20,
          rotate: -120,
          transformOrigin: '50% 50%',
        })
        .to(
          '#shape-square',
          1,
          { y: 0, x: -40, rotate: 90, transformOrigin: '50% 50%' },
          '-=1'
        )
        .to(
          '#shape-triangle',
          1,
          { y: 40, x: 25, rotate: 180, transformOrigin: '50% 50%' },
          '-=1'
        )
        .to('#pricetag-cta', 1, {
          delay: 10,
          rotation: '-90',
          ease: 'Power1.easeInOut',
          repeat: 3,
          yoyo: true,
          transformOrigin: '100% 0%',
        })
        .to('#shape-circle', 1, {
          y: 0,
          x: 0,
          rotate: 0,
          transformOrigin: '50% 50%',
        })
        .to(
          '#shape-square',
          1,
          { y: 0, x: 0, rotate: 0, transformOrigin: '50% 50%' },
          '-=1'
        )
        .to(
          '#shape-triangle',
          1,
          { y: 0, x: 0, rotate: 0, transformOrigin: '50% 50%' },
          '-=1'
        );
    },
  },
};
</script>

<style>
.cta-bg {
  background-image: url('../../assets/svgs/cta_bg.svg');
  background-size: cover;
  background-position: center;
}
</style>
