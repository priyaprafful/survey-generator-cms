<template>
  <div class="flex justify-between">
    <div
      v-for="(person, index) in data.team.slice(from, to)"
      :key="index"
      class="flex flex-col w-48"
    >
      <div>
        <div class="mb-4">
          <prismic-image
            :field="person.first_image"
            class="w-48 h-48 object-cover rounded-full"
          />
          <!-- <prismic-image :field="person.second_image" class="w-20" /> -->
        </div>

        <div>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
    from: {
      type: [String, Number],
      default: null,
    },
    to: {
      type: [String, Number],
      default: null,
    },
  },
};
</script>

<style lang="scss">
.cardi {
  border-radius: 9999px;
  padding: 0.5rem;
  background: linear-gradient(to right, #43a8d8, #a4e9fd);
}

.person {
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(7) {
    align-items: center;
  }

  &:nth-child(4n) {
    align-items: flex-end;
  }
}
</style>
