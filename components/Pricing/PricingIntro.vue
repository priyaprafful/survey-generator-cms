<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="leading-loose">
          <IconWrapper>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26.33">
              <rect
                x="1"
                y="1"
                width="20"
                height="24.33"
                rx="2.54"
                style="
                  fill: none;
                  stroke: #161e2e;
                  stroke-linecap: square;
                  stroke-width: 2px;
                "
              />
            </svg>
          </IconWrapper>

          <prismic-rich-text :field="data.intro_title" class="mb-6" />
          <prismic-rich-text :field="data.intro_content" class="rich-text" />
        </Block>

        <Block half>
          <Dots>
            <prismic-image v-if="data.intro_image" :field="data.intro_image" />
          </Dots>
        </Block>
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
