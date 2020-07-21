<template>
  <Wrapper>
    <Container>
      <h2 class="mb-20 text-center">Vi som jobbar med SurveyGenerator</h2>

      <div class="grid grid-cols-team row-gap-12 justify-between">
        <div v-for="(person, index) in data.team" :key="index">
          <prismic-image
            :field="person.first_image"
            class="w-full h-48 object-cover rounded-full mb-4"
          />
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
