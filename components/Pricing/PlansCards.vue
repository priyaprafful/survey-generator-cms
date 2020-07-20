<template>
  <Wrapper>
    <Container>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(card, index) in data.cards"
          :key="index"
          class="flex bg-green-400 p-6 rounded"
          :class="{
            '-mt-6 border-2 border-blue-9': index === 1,
            'col-start-1 col-end-4 flex-row items-center': index === 3,
            'flex-col': index !== 3,
          }"
        >
          <h3
            class="text-center"
            :class="{ 'mb-6': index !== 3, 'mr-6': index === 3 }"
          >
            {{ $prismic.asText(card.plan) }}
          </h3>
          <prismic-rich-text
            :field="card.description"
            :class="{ 'mb-10': index !== 3 }"
          />
          <ul v-if="index !== 3" class="mt-auto leading-loose">
            <li
              v-for="(item, idx) in card.list"
              :key="idx"
              class="flex items-center text-sm"
            >
              <CheckMark class="w-3 h-3 mr-3" />
              {{ item.text }}
            </li>
          </ul>

          <MainBtn
            v-if="index === 3"
            text="Kontakta oss"
            navigate-to="kontakt"
            class="ml-6"
          />
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
