<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="flex flex-col">
          <IconWrapper circle>
            <ChatIcon class="overflow-visible" />
          </IconWrapper>

          <div class="flex mb-6">
            <div class="flex flex-col justify-between">
              <prismic-rich-text
                :field="data.phone"
                class="text-lg font-bold mb-2"
              />
              <prismic-rich-text
                :field="data.opening_hours"
                class="text-sm text-blue-4"
              />
            </div>
          </div>

          <div class="inline-flex items-center mb-2">
            <svg-icon icon="mail" class="text-blue-3 mr-4" lg />

            <prismic-rich-text :field="data.email" />
          </div>

          <div class="inline-flex items-center mb-4">
            <svg-icon icon="help" class="text-blue-3 mr-4" lg />

            <prismic-rich-text :field="data.support_email" />
          </div>

          <div>
            <ul class="flex">
              <li>
                <a
                  :href="$store.state.miscellaneous.facebook_url.url"
                  rel="”noopener”"
                  class="inline-block py-4 pr-4 text-blue-4 hover:text-blue-2 transition duration-150"
                >
                  <svg-icon icon="facebook" lg />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.miscellaneous.twitter_url.url"
                  rel="”noopener”"
                  class="inline-block py-4 pr-4 mx-4 text-blue-4 hover:text-blue-2 transition duration-150"
                >
                  <svg-icon icon="twitter" lg />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.miscellaneous.linkedin_url.url"
                  rel="”noopener”"
                  class="inline-block py-4 pr-4 text-blue-4 hover:text-blue-2 transition duration-150"
                >
                  <svg-icon icon="linkedin" lg />
                </a>
              </li>
            </ul>
          </div>
        </Block>
        <Block half class="flex flex-col">
          <IconWrapper square>
            <BuildingIcon />
          </IconWrapper>

          <div class="flex justify-between mb-6">
            <p class="text-blue-4 leading-relaxed">
              {{ $prismic.asText($store.state.miscellaneous.company_name) }}
              <br />
              {{ $prismic.asText($store.state.miscellaneous.street_address) }}
              <br />
              {{ $prismic.asText($store.state.miscellaneous.zip_city) }}
            </p>
          </div>

          <prismic-rich-text
            :field="data.description"
            class="rich-text leading-relaxed"
          />
        </Block>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import ChatIcon from '@/assets/svgs/chat.svg?inline';
import BuildingIcon from '@/assets/svgs/building.svg?inline';

export default {
  components: {
    ChatIcon,
    BuildingIcon,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.floatAnimation();
    this.buildingStagger();
  },
  methods: {
    floatAnimation() {
      this.$gsap
        .timeline({ repeat: -1 })
        .to('#bubble1', 3, { y: '-=1', x: '+=2', rotation: '-=4' })
        .to('#bubble1', 3, { y: '+=1', x: '-=2', rotation: '-=3' })
        .to('#bubble1', 3, { y: '-=2', rotation: '+=3' })
        .to('#bubble1', 3, { y: '+=2', rotation: '+=3' });

      this.$gsap
        .timeline({ repeat: -1 })
        .to('#bubble2', 3, { y: '+=1', x: '-=2', rotation: '-=5' })
        .to('#bubble2', 3, { y: '-=1', x: '+=2', rotation: '-=5' })
        .to('#bubble2', 3, { y: '-=2', rotation: '+=5' })
        .to('#bubble2', 3, { y: '+=2', rotation: '+=5' });

      this.$gsap
        .timeline({ repeat: -1 })
        .staggerTo('.typing', 2, { scale: 0, delay: -2 }, 0.15)
        .staggerTo('.typing', 2, { scale: 1, delay: 4 }, 0.15);
    },
    buildingStagger() {
      this.$gsap
        .timeline({ repeat: -1 })
        .staggerTo(
          '.window',
          1,
          {
            rotation: '-90',
            ease: 'Steps.easeOut',
            delay: 10,
            repeat: 3,
            repeatDelay: 0.1,
            yoyo: true,
          },
          0.1
        )
        .staggerTo('.window', 10, { x: 0, ease: 'Elastic.easeOut' }, 0.1);
    },
  },
};
</script>
