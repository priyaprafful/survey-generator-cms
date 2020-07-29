<template>
  <div class="max-w-screen-xl m-auto py-12 px-12">
    <div class="flex justify-between">
      <SEB class="h-8" />
      <SACO class="h-8" />
      <AssaAbloy class="h-8" />
      <SwedishMatch class="h-8" />
    </div>
  </div>
</template>

<script>
import SEB from '@/components/Common/SVG/SEB.vue';
import SACO from '@/components/Common/SVG/SACO.vue';
import AssaAbloy from '@/components/Common/SVG/AssaAbloy.vue';
import SwedishMatch from '@/components/Common/SVG/SwedishMatch.vue';

export default {
  components: {
    SEB,
    SACO,
    AssaAbloy,
    SwedishMatch,
  },
};
</script>
