<template>
  <footer class="bg-yellow py-20 px-12">
    <div class="max-w-screen-xl m-auto">
      <div class="flex justify-center">
        <img
          class="w-32"
          src="../assets/img/sg-logo-color.png"
          alt="SurveyGenerator"
        />
      </div>
    </div>
  </footer>

  <!-- <p>
        © 2000 - {{ new Date().getFullYear() }} | Alstra AB, Norra Dryckesgränd
        3, 111 30 Stockholm
      </p>

      <ul>
        <li
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang__item"
        >
          <span v-if="$i18n.locale === locale.code">{{ locale.code }}</span>
          <n-link
            v-else
            :to="switchLocalePath(locale.code)"
            :title="locale.name"
            exact
          >
            {{ locale.code }}
          </n-link>
        </li>
      </ul> -->
</template>

<script>
export default {
  name: 'Footer',
};
</script>
