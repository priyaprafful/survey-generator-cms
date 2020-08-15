<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="flex flex-col">
          <IconCircle>
            <ChatIcon class="overflow-visible" />
          </IconCircle>

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
            <svg-icon icon="mail" class="text-blue-2 mr-4" lg />

            <prismic-rich-text :field="data.email" />
          </div>

          <div class="inline-flex items-center mb-4">
            <svg-icon icon="help" class="text-blue-2 mr-4" lg />

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
          <IconCircle>
            <BuildingIcon />
          </IconCircle>
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
import { TimelineMax } from 'gsap';
import IconCircle from '@/components/Common/Icons/IconCircle.vue';
import ChatIcon from '@/assets/svgs/chat.svg?inline';
import BuildingIcon from '@/assets/svgs/building.svg?inline';

export default {
  components: {
    IconCircle,
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
  },
  methods: {
    floatAnimation() {
      const tlBubble1 = new TimelineMax({ repeat: -1 });
      tlBubble1
        .to('.bubble1', 3, { y: '-=1', x: '+=2', rotation: '-=4' })
        .to('.bubble1', 3, { y: '+=1', x: '-=2', rotation: '-=3' })
        .to('.bubble1', 3, { y: '-=2', rotation: '+=3' })
        .to('.bubble1', 3, { y: '+=2', rotation: '+=3' });

      const tlBubble2 = new TimelineMax({ repeat: -1 });
      tlBubble2
        .to('.bubble2', 3, { y: '+=1', x: '-=2', rotation: '-=5' })
        .to('.bubble2', 2, { y: '-=1', x: '+=2', rotation: '-=5' })
        .to('.bubble2', 3, { y: '-=2', rotation: '+=5' })
        .to('.bubble2', 3, { y: '+=2', rotation: '+=5' });

      const typing = new TimelineMax({ repeat: -1 });
      typing
        .to('.typing', 2, { autoAlpha: 0, delay: -1 })
        .to('.typing', 2, { autoAlpha: 1, delay: 10 });
    },
  },
};
</script>
