<template>
  <div v-if="isOpen" class="cookie">
    <div>
      Vi använder kakor för att förbättra din upplevelse på webbplatsen. Läs mer
      om kakor
    </div>
    <button @click="accept">
      Accept
    </button>
    <button @click="deny">
      Decline
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true);
      }
    },
    accept() {
      this.isOpen = false;

      if (process.browser) {
        localStorage.setItem('GDPR:accepted', true);
      }
    },
    deny() {
      this.isOpen = false;

      if (process.browser) {
        localStorage.setItem('GDPR:accepted', false);
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.cookie
  z-index: 1
  position: fixed
  bottom: 0
  background: green
  &__link
    color: #ffffff
    text-decoration: underline
    transition: all .25s
    &:hover
      text-decoration: none
</style>
