<template>
  <div class="bg-white">
    <Container class="py-24">
      <div class="flex">
        <Block half>
          <Placeholder class="w-12 mb-4" />
          <p>08-22 22 65</p>
          <p>Mån - Fre 10:00 - 17:00</p>
          <FunnelBtn text="Ring oss" navigate-to="kontakt" />
          <p>info@alstra.se</p>
          <p>support@alstra.se</p>
        </Block>
        <Block half>
          <Placeholder class="w-12 mb-4" />
          <p>
            Alstras kontor ligger stategiskt placerat i Gamla Stan och är enkelt
            att ta sig till oavsett om du går, cyklar, åker med SL eller tar
            bilen.
          </p>
          <p>Alstra AB</p>
          <p>Norra Dryckesgränd 3</p>
          <p>111 30 Stockholm</p>
          <GamlaStan class="w-40" />
        </Block>
      </div>
    </Container>
  </div>
</template>

<script>
import GamlaStan from '@/components/Common/SVG/GamlaStan.vue';

export default {
  components: {
    GamlaStan,
  },
};
</script>
