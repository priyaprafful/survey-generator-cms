<template>
  <Container>
    <h2 class="mb-20 text-center">Vi som jobbar med SurveyGenerator</h2>
    <TeamRow :data="data" from="0" to="4" class="mb-12" />
    <TeamRow :data="data" from="4" to="8" />
  </Container>
</template>

<script>
import TeamRow from './TeamRow.vue';

export default {
  components: {
    TeamRow,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
