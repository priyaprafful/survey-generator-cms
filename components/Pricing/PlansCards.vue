<template>
  <Wrapper>
    <Container>
      <div class="grid grid-cols-3 gap-6 asd">
        <div
          v-for="(card, index) in data.cards"
          :key="index"
          class="flex p-6 shadow-card rounded-md overflow-hidden"
          :class="{
            '-mt-6': index === 1,
            'justify-evenly bg-blue-9 text-white col-start-1 col-end-4 flex-row items-center asd':
              index === 3,
            'flex-col bg-white border-2 border-lightblue-5': index !== 3,
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

          <MainBtn v-if="index === 3" text="Kontakta oss" to="kontakt" white />
        </div>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
.asd {
  background-image: url('./SVG/Shapes_BG.svg');
  background-size: cover;
  /* background-position: center center; */
}
</style>
