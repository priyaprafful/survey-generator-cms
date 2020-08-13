<template>
  <Wrapper>
    <Container>
      <h2 class="mb-16 text-center">Vi som jobbar med SurveyGenerator</h2>

      <div class="grid grid-cols-team row-gap-20 justify-between">
        <div v-for="(person, index) in data.team" :key="index">
          <div class="flex relative mb-4">
            <div class="lines" />
            <prismic-image
              :field="person.first_image"
              class="w-full h-48 object-cover rounded-full z-10"
            />
          </div>
          <!-- <prismic-image :field="person.second_image" /> -->

          <prismic-rich-text
            :field="person.name"
            class="text-lg font-medium mb-2"
          />
          <prismic-rich-text :field="person.role" class="text-sm mb-2" />
          <prismic-rich-text
            :field="person.email"
            class="text-xs text-blue-4 mb-1"
          />
          <prismic-rich-text
            v-if="person.phone"
            :field="person.phone"
            class="text-xs text-blue-4"
          />

          <!-- <p>{{ $t('contact.questions.background') }}</p>
          <prismic-rich-text :field="person.background" />
          <p>{{ $t('contact.questions.tasks') }}</p>
          <prismic-rich-text :field="person.tasks" />
          <p>{{ $t('contact.questions.question') }}</p>
          <prismic-rich-text :field="person.question" /> -->
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

<style scoped>
.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-image: radial-gradient(#aad7ed 1px, transparent 2px);
  background-size: calc(10 * 1px) calc(10 * 1px); */
  /* transform: translate(-20px, -20px);
  width: 50%;
  height: 50%; */

  background-image: repeating-linear-gradient(
    45deg,
    #cce7f4 0,
    #cce7f4 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 50px 50px;
}
</style>
