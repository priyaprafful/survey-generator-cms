<template>
  <footer class="bg-yellow-2 text-yellow-4 text-sm py-16 px-12">
    <div class="max-w-screen-xl m-auto">
      <div class="flex justify-center mb-6">
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="group flex items-center font-bold"
        >
          <svg-icon v-if="$i18n.locale !== locale.code" icon="bubble" />
          <span
            v-if="$i18n.locale !== locale.code"
            class="ml-2 group-hover:underline"
          >
            {{ locale.name }}
          </span>
        </nuxt-link>
      </div>

      <ul class="flex justify-center mb-4">
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="localePath(link.path)"
          class="py-2 px-4 hover:underline"
        >
          <span v-if="$i18n.locale === 'sv'">{{ link.labelSv }}</span>
          <span v-if="$i18n.locale === 'en'">{{ link.labelEn }}</span>
        </nuxt-link>
      </ul>

      <ul class="flex justify-center mb-4">
        <li class="py-2 px-4">
          <a
            :href="$store.state.miscellaneous.facebook_url.url"
            rel="”noopener”"
            class="hover:text-yellow-3 transition duration-150"
          >
            <svg-icon icon="facebook" lg />
          </a>
        </li>
        <li class="py-2 px-4">
          <a
            :href="$store.state.miscellaneous.twitter_url.url"
            rel="”noopener”"
            class="hover:text-yellow-3 transition duration-150"
          >
            <svg-icon icon="twitter" lg />
          </a>
        </li>
        <li class="py-2 px-4">
          <a
            :href="$store.state.miscellaneous.linkedin_url.url"
            rel="”noopener”"
            class="hover:text-yellow-3 transition duration-150"
          >
            <svg-icon icon="linkedin" lg />
          </a>
        </li>
      </ul>

      <div class="flex justify-center">
        <p>
          © 2000 - {{ new Date().getFullYear() }} |
          {{ $prismic.asText($store.state.miscellaneous.company_name) }},
          {{ $prismic.asText($store.state.miscellaneous.street_address) }},
          {{ $prismic.asText($store.state.miscellaneous.zip_city) }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {
        path: 'cookie-policy',
        labelSv: 'Om webbplatsen',
        labelEn: 'Cookie policy',
      },
      {
        path: 'privacy-policy',
        labelSv: 'Integritetspolicy',
        labelEn: 'Privacy policy',
      },
    ],
  }),
};
</script>
