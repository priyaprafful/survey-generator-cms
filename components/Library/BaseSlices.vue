<template>
  <main>
    <section v-for="(slice, index) in slices" :key="'slice-' + index">
      <template v-if="slice.slice_type === 'page_header'">
        <PageHeader :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'page_two_column'">
        <PageTwoColumns :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'page_three_column'">
        <PageThreeColumns :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'page_small_column'">
        <PageSmallColumns :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'page_document'">
        <PageDocument :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'hero'">
        <Hero :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'testimonials'">
        <Testimonials :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'contact_column'">
        <ContactColumns :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'contact_team'">
        <ContactTeam :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'showcase'">
        <Showcase :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'booking'">
        <Booking :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'logo_cloud'">
        <LogoCloud :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'login'">
        <Login :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'pricing_types'">
        <PricingTypes :slice="slice" />
      </template>
    </section>
  </main>
</template>

<script>
import PageHeader from '@/components/Slices/PageHeader.vue';
import PageTwoColumns from '@/components/Slices/PageTwoColumns.vue';
import PageThreeColumns from '@/components/Slices/PageThreeColumns.vue';
import PageSmallColumns from '@/components/Slices/PageSmallColumns.vue';
import PageDocument from '@/components/Slices/PageDocument.vue';
import Hero from '@/components/Slices/Hero.vue';
import Testimonials from '@/components/Slices/Testimonials.vue';
import ContactColumns from '@/components/Slices/ContactColumns.vue';
import ContactTeam from '@/components/Slices/ContactTeam.vue';
import Showcase from '@/components/Slices/Showcase.vue';
import Booking from '@/components/Slices/Booking.vue';
import LogoCloud from '@/components/Slices/LogoCloud.vue';
import Login from '@/components/Slices/Login.vue';
import PricingTypes from '@/components/Slices/PricingTypes.vue';

export default {
  name: 'BaseSlices',
  components: {
    PageHeader,
    PageTwoColumns,
    PageThreeColumns,
    PageSmallColumns,
    PageDocument,
    Hero,
    Testimonials,
    ContactColumns,
    ContactTeam,
    Showcase,
    Booking,
    LogoCloud,
    Login,
    PricingTypes
  },
  props: {
    slices: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
