<template>
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
    <div>
      <p>
        <span>
          {{
            new Date(post.data.date).toLocaleDateString(currentLocale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </span>
      </p>
      <h2>{{ $prismic.asText(post.data.title) }}</h2>
      <p>{{ $prismic.asText(post.data.content) }}</p>
      <p>{{ getFirstParagraph(post) }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BlogWidget',
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  computed: {
    formattedDate() {
      const date = Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(this.post.data.date));

      return date;
    },
  },
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300;
      const firstParagraph = post.data.content;
      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      } else {
        return firstParagraph;
      }
    },
  },
};
</script>
