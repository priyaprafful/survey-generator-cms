<template>
  <Wrapper>
    <Container>
      <div class="inline-flex items-center leading-relaxed">
        <div class="w-1/2 rounded-lg text-blue-7 shadow-card">
          <div class="p-10 rounded-t-lg bg-bluegray-2">
            <prismic-rich-text
              :field="data.surveytype_left_title"
              class="text-center text-lg"
            />
          </div>
          <div class="p-10 rounded-b-lg bg-white">
            <prismic-rich-text
              :field="data.surveytype_left_content"
              class="rich-text"
            />
          </div>
        </div>

        <div class="w-1/2 shadow-card rounded-lg">
          <div class="p-10 text-blue-7 bg-lightblue-5 rounded-tr-lg">
            <prismic-rich-text
              :field="data.surveytype_right_title"
              class="text-center text-lg"
            />
          </div>
          <div class="p-10 text-white bg-blue-7 rounded-br-lg">
            <prismic-rich-text
              :field="data.surveytype_right_content"
              class="rich-text"
            />
          </div>
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
