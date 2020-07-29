<template>
  <Wrapper>
    <Container>
      <prismic-rich-text :field="data.cards_title" class="text-center mb-16" />

      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(card, index) in data.cards"
          :key="index"
          class="flex p-6 shadow-card rounded-md overflow-hidden relative"
          :class="{
            '-mt-6': index === 1,
            'bg-white border-2 border-lightblue-5': index !== 3,
            'bg-blue-9 text-white col-start-1 col-end-4': index === 3,
          }"
        >
          <div v-if="index === 3" class="abstract" />
          <div
            class="flex z-10"
            :class="{
              'flex-col': index !== 3,
              'flex-row justify-evenly items-center ': index === 3,
            }"
          >
            <h3 class="text-center" :class="{ 'mb-6': index !== 3 }">
              {{ $prismic.asText(card.plan) }}
            </h3>

            <prismic-rich-text
              :field="card.description"
              class="text-sm leading-relaxed"
              :class="{
                'mb-6 p-6 -ml-6 -mr-6 bg-lightblue-2 ': index !== 3,
                'px-6 w-1/2 ': index === 3,
              }"
            />

            <ul v-if="index !== 3" class="mt-auto text-sm leading-loose">
              <li
                v-for="(item, idx) in card.list"
                :key="idx"
                class="flex items-center"
              >
                <CheckMark class="w-3 h-3 mr-3" />
                {{ item.text }}
              </li>
            </ul>

            <MainBtn
              v-if="index === 3"
              text="Kontakta oss"
              to="kontakt"
              white
              class="bg-bluegray-1 hover:bg-bluegray-3 text-blue-9"
            />
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import CheckMark from '@/components/Common/SVG/CheckMark.vue';

export default {
  components: {
    CheckMark,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
.abstract {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url('./SVG/Shapes_BG.svg');
  background-size: cover;
  background-position: center center;
  opacity: 0.05;
}
</style>
