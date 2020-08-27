<template>
  <section class="bg-bgMain cta-bg">
    <Container>
      <div class="flex">
        <Block half>
          <h2 class="mb-4">Redo att sätta igång?</h2>
          <p class="mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Du kan även kontakta oss för en lösning anpassat för era
            behov.
          </p>

          <div class="flex items-center">
            <MainBtn :text="$t('menu.book_demo')" to="boka-demo" cta />

            <MainBtn
              :text="$t('common.get_quote')"
              :to="'kontakt'"
              class="py-2 px-4"
            />
          </div>
        </Block>

        <Block half class="flex">
          <div
            class="flex flex-col ml-4 p-6 bg-lightblue-3 rounded-tl-xl rounded-br-xl"
          >
            <IconWrapper square>
              <PriceTagsIcon class="overflow-visible" />
            </IconWrapper>
            <h3 class="mb-2 leading-normal">Prisvärt</h3>
            <p class="leading-relaxed mb-4">
              Välj mellan tre olika prisplaner eller skräddarsytt för dina
              behov.
            </p>
            <MainBtn text="Priser" to="priser" class="mt-auto" left-aligned />
          </div>

          <div
            class="flex flex-col ml-4 p-6 bg-lightblue-3 rounded-tl-xl rounded-br-xl"
          >
            <IconWrapper square>
              <ShapesIcon class="overflow-visible" />
            </IconWrapper>
            <h3 class="mb-2 leading-normal">Enkelt och effektivt</h3>
            <p class="leading-relaxed mb-4">
              Kostnadseffektiva undersökningar med vårt flexibla enkätverktyg.
            </p>
            <MainBtn
              text="Verktyget"
              to="verktyget"
              class="mt-auto"
              left-aligned
            />
          </div>
        </Block>
      </div>
    </Container>
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
    this.tagWiggle();
    this.moveShapes();
  },
  methods: {
    tagWiggle() {
      this.$gsap.timeline({ repeat: -1 }).to(
        '#pricetag-cta',
        1,
        {
          delay: 10,
          rotation: '-90',
          ease: 'Power1.easeInOut',
          repeat: 3,
          yoyo: true,
          transformOrigin: '100% 0%',
        },
        0.5
      );
    },
    moveShapes() {
      this.$gsap
        .timeline({ repeat: -1 })
        .to('#shape-circle', 1, {
          x: 40,
          rotate: 160,
          transformOrigin: '50% 50%',
          delay: 20,
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
        .to('#shape-circle', 1, {
          y: -40,
          x: 20,
          rotate: -120,
          transformOrigin: '50% 50%',
          delay: 20,
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
        .to('#shape-circle', 1, {
          y: 0,
          x: 0,
          rotate: 0,
          transformOrigin: '50% 50%',
          delay: 20,
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
