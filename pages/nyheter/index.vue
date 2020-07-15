<template>
  <div>
    <PageTitle
      title="Nyheter"
      description="Etiam condimentum dapibus dictum."
    />
    <Container class="py-24">
      <article>
        <div class="flex flex-wrap">
          <div
            v-for="post in posts"
            :key="post.id"
            :post="post"
            class="flex flex-col w-1/2"
          >
            <time
              :datetime="post.data.date"
              class="text-sm leading-5 text-blue-light py-2 px-6"
            >
              {{
                new Date(post.data.date).toLocaleDateString($i18n.locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              }}
            </time>
            <nuxt-link
              :to="
                localePath({
                  name: 'nyheter-post',
                  params: {
                    post: post.uid,
                  },
                })
              "
            >
              <div class="bg-white p-6 rounded shadow-post">
                <h3 class="text-xl leading-7 font-medium font-body mb-2">
                  {{ $prismic.asText(post.data.title) }}
                </h3>
                <p class="leading-6">
                  {{ getFirstParagraph($prismic.asText(post.data.content)) }}
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </article>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Nyheter',
  nuxtI18n: {
    paths: {
      sv: '/nyheter',
      en: '/news',
    },
  },
  async asyncData({ $prismic, error, app }) {
    const currentLocale = app.i18n.locales.filter(
      (lang) => lang.code === app.i18n.locale
    )[0];

    try {
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        {
          orderings: '[my.post.date desc]',
          lang: currentLocale.iso.toLowerCase(),
        }
      );

      // Returns data to be used in template
      return {
        posts: blogPosts.results,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' });
    }
  },
  methods: {
    getFirstParagraph(content) {
      const textLimit = 100;
      const firstParagraph = content;
      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      } else {
        return firstParagraph;
      }
    },
  },
  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    };
  },
};
</script>
