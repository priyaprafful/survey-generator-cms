<template>
  <Container class="py-24">
    <div v-for="(person, index) in data.team" :key="index">
      <prismic-image :field="person.first_image" class="w-20" />
      <prismic-image :field="person.second_image" class="w-20" />
      <prismic-rich-text :field="person.name" />
      <prismic-rich-text :field="person.role" />
      <prismic-rich-text :field="person.email" />
      <prismic-rich-text :field="person.phone" />
      <p>{{ $t('contact.questions.background') }}</p>
      <prismic-rich-text :field="person.background" />
      <p>{{ $t('contact.questions.tasks') }}</p>
      <prismic-rich-text :field="person.tasks" />
      <p>{{ $t('contact.questions.question') }}</p>
      <prismic-rich-text :field="person.question" />
    </div>
  </Container>
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
