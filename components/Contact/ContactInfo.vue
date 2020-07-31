<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="flex flex-col">
          <IconCircle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.62">
              <g>
                <path
                  d="M7.8,16.6A8.5,8.5,0,0,0,15,20a11,11,0,0,0,1.72-.14L21,22V18a5.25,5.25,0,0,0,2-4,5.25,5.25,0,0,0-2.08-4"
                  style="fill: none; stroke: #43a8d8; stroke-width: 2px;"
                />
                <path
                  d="M11,1C5.48,1,1,4.58,1,9a7,7,0,0,0,2,4.78V19l4.83-2.42A12.1,12.1,0,0,0,11,17c5.52,0,10-3.58,10-8S16.52,1,11,1Z"
                  style="
                    fill: none;
                    stroke: #161e2e;
                    stroke-linecap: square;
                    stroke-width: 2px;
                  "
                />
              </g>
            </svg>
          </IconCircle>

          <div class="flex mb-6">
            <div class="flex flex-col justify-between">
              <prismic-rich-text
                :field="data.phone"
                class="text-lg font-bold mb-2"
              />
              <prismic-rich-text
                :field="data.opening_hours"
                class="text-sm text-blue-4"
              />
            </div>

            <!-- <MainBtn text="Ring oss" to="tel:08-222265" class="hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M13,8a3,3,0,0,1,3,3,1,1,0,0,0,2,0,5,5,0,0,0-5-5,1,1,0,0,0,0,2Z"
                  transform="translate(-2 -2)"
                  style="fill: #fff;"
                />
                <path
                  d="M13,4a7,7,0,0,1,7,7,1,1,0,0,0,2,0,9,9,0,0,0-9-9,1,1,0,0,0,0,2Z"
                  transform="translate(-2 -2)"
                  style="fill: #fff;"
                />
                <path
                  d="M21.75,15.91a1,1,0,0,0-.72-.65l-6-1.37a1,1,0,0,0-.92.26c-.14.13-.15.14-.8,1.38a9.87,9.87,0,0,1-4.87-4.89C9.71,10,9.72,10,9.85,9.85a1,1,0,0,0,.26-.92L8.74,3a1,1,0,0,0-.65-.72,4.21,4.21,0,0,0-.72-.18A4,4,0,0,0,6.6,2,4.6,4.6,0,0,0,2,6.6,15.42,15.42,0,0,0,17.4,22,4.6,4.6,0,0,0,22,17.4h0a4.87,4.87,0,0,0-.06-.76A4.61,4.61,0,0,0,21.75,15.91ZM17.4,20A13.41,13.41,0,0,1,4,6.6,2.62,2.62,0,0,1,6.6,4h.33L8,8.64l-.54.28c-.86.45-1.54.81-1.18,1.59a11.85,11.85,0,0,0,7.18,7.21c.84.34,1.17-.29,1.62-1.16l.29-.55L20,17.07v.33A2.62,2.62,0,0,1,17.4,20Z"
                  transform="translate(-2 -2)"
                  style="fill: #fff;"
                />
              </svg>
            </MainBtn> -->
          </div>

          <div class="inline-flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 16"
              class="h-4 w-4 mr-4"
            >
              <path
                d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,1.2,0L20,7.25V17A1,1,0,0,1,19,18Z"
                transform="translate(-2 -4)"
                style="fill: #3d97c3;"
              />
            </svg>

            <prismic-rich-text :field="data.email" />
          </div>

          <div class="inline-flex items-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 90.01 90.31"
              class="h-4 w-4 mr-4"
            >
              <path
                d="M83.16,37a38.52,38.52,0,0,1,0,16l-9.57-2.72A28.33,28.33,0,0,0,74.06,45a28.68,28.68,0,0,0-.5-5.31Z"
                transform="translate(0.01 0.34)"
                style="fill: #3d97c3;"
              />
              <path
                d="M53,6.81l-2.78,9.6a28,28,0,0,0-5.25-.5,28.36,28.36,0,0,0-5.28.5L37,6.81a40.21,40.21,0,0,1,16.06,0Z"
                transform="translate(0.01 0.34)"
                style="fill: #3d97c3;"
              />
              <path
                d="M6.81,36.94l9.6,2.75a28.68,28.68,0,0,0-.5,5.31,28.36,28.36,0,0,0,.5,5.28L6.81,53a40.36,40.36,0,0,1,0-16.09Z"
                transform="translate(0.01 0.34)"
                style="fill: #3d97c3;"
              />
              <path
                d="M50.28,73.59,53,83.19a40.21,40.21,0,0,1-16.06,0l2.75-9.6a28,28,0,0,0,10.56,0Z"
                transform="translate(0.01 0.34)"
                style="fill: #3d97c3;"
              />
              <path
                d="M90,45a44.33,44.33,0,0,1-1.69,12.12,3.1,3.1,0,0,1-.15.6v.09a.6.6,0,0,1-.06.19,45,45,0,0,1-86.18-.16v-.09a2.46,2.46,0,0,1-.15-.53v-.06A45,45,0,1,1,90,45Zm-6,0a39.8,39.8,0,0,0-.84-8l-9.6,2.72a28.68,28.68,0,0,1,.5,5.31,28.33,28.33,0,0,1-.47,5.28L83.16,53A39.09,39.09,0,0,0,84,45ZM71.88,34l9.62-2.75A39,39,0,0,0,58.78,8.5L56,18.09A29.25,29.25,0,0,1,71.88,34ZM81.5,58.75,71.91,56A29.25,29.25,0,0,1,56,71.88l2.75,9.62A39,39,0,0,0,81.5,58.75ZM68.09,45A23.08,23.08,0,1,0,45,68.06h0a23.05,23.05,0,0,0,23.09-23ZM50.25,16.41,53,6.81a40.21,40.21,0,0,0-16.06,0l2.75,9.6a28.13,28.13,0,0,1,10.56,0ZM53,83.19l-2.75-9.6a28,28,0,0,1-10.56,0L37,83.19a40.21,40.21,0,0,0,16.06,0ZM34,18.09,31.22,8.5A39,39,0,0,0,8.5,31.19L18.12,34A29.25,29.25,0,0,1,34,18.09ZM31.19,81.5,34,71.91A29.27,29.27,0,0,1,18.09,56L8.5,58.78A39.06,39.06,0,0,0,31.19,81.5ZM16.41,39.69l-9.6-2.75A40.36,40.36,0,0,0,6.81,53l9.6-2.75a28.36,28.36,0,0,1-.5-5.28A28.68,28.68,0,0,1,16.41,39.69Z"
                transform="translate(0.01 0.34)"
                style="fill: #3d97c3;"
              />
            </svg>

            <prismic-rich-text :field="data.support_email" />
          </div>

          <div>
            <ul class="flex">
              <li>
                <a
                  :href="$store.state.miscellaneous.facebook_url.url"
                  rel="”noopener”"
                >
                  <Facebook class="h-4 w-4" />
                </a>
              </li>
              <li class="mx-8">
                <a
                  :href="$store.state.miscellaneous.twitter_url.url"
                  rel="”noopener”"
                >
                  <Twitter class="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  :href="$store.state.miscellaneous.linkedin_url.url"
                  rel="”noopener”"
                >
                  <LinkedIn class="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </Block>
        <Block half class="flex flex-col">
          <IconCircle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.88 20.2">
              <g>
                <path
                  d="M11.58,3.25a.36.36,0,0,1,.36-.36h.72a.36.36,0,0,1,.33.36V4a.36.36,0,0,1-.36.36h-.69A.36.36,0,0,1,11.58,4Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M11.94,5.77h.72a.36.36,0,0,1,.36.36l0,0v.71a.36.36,0,0,1-.36.36h-.69a.36.36,0,0,1-.36-.36V6.1A.36.36,0,0,1,11.94,5.77Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M11.94,8.66h.72A.36.36,0,0,1,13,9v.72a.36.36,0,0,1-.36.36h-.69a.36.36,0,0,1-.36-.36V9A.36.36,0,0,1,11.94,8.66Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M11.58,11.9a.36.36,0,0,1,.36-.36h.72a.36.36,0,0,1,.33.36v.69a.36.36,0,0,1-.36.36h-.69a.36.36,0,0,1-.36-.36Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M12.63,15.87h-.69a.36.36,0,0,1-.36-.36v-.72a.36.36,0,0,1,.36-.36h.72a.36.36,0,0,1,.33.36v.72A.36.36,0,0,1,12.63,15.87Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M8.66,9A.36.36,0,0,1,9,8.63h.72A.36.36,0,0,1,10.1,9v.72a.36.36,0,0,1-.36.36H9a.36.36,0,0,1-.36-.36Z"
                  style="fill: #3d97c3;"
                />
                <rect
                  x="8.66"
                  y="2.89"
                  width="1.44"
                  height="1.44"
                  rx="0.36"
                  style="fill: #3d97c3;"
                />
                <rect
                  x="8.66"
                  y="5.74"
                  width="1.44"
                  height="1.44"
                  rx="0.36"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M8.66,11.9A.37.37,0,0,1,9,11.54h.72a.37.37,0,0,1,.36.36v.72a.37.37,0,0,1-.36.37H9a.37.37,0,0,1-.36-.37Z"
                  style="fill: #3d97c3;"
                />
                <rect
                  x="5.78"
                  y="2.89"
                  width="1.44"
                  height="1.44"
                  rx="0.36"
                  style="fill: #3d97c3;"
                />
                <rect
                  x="5.78"
                  y="5.74"
                  width="1.44"
                  height="1.44"
                  rx="0.36"
                  style="fill: #3d97c3;"
                />
                <rect
                  x="5.78"
                  y="8.66"
                  width="1.44"
                  height="1.44"
                  rx="0.36"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M7.22,11.9v.72a.37.37,0,0,1-.36.37H6.14a.37.37,0,0,1-.36-.37V11.9a.37.37,0,0,1,.36-.36h.72A.37.37,0,0,1,7.22,11.9Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M3.25,4.33A.37.37,0,0,1,2.94,4V3.25a.37.37,0,0,1,.36-.36h.64a.37.37,0,0,1,.37.36h0V4A.36.36,0,0,1,4,4.33H3.25Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M2.94,9a.37.37,0,0,1,.36-.36h.64A.37.37,0,0,1,4.31,9h0v.72A.36.36,0,0,1,4,10.1H3.25a.37.37,0,0,1-.31-.36Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M4,13H3.25a.39.39,0,0,1-.31-.37V11.9a.39.39,0,0,1,.36-.36h.64a.38.38,0,0,1,.37.36h0v.72A.37.37,0,0,1,4,13Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M3.25,15.87a.37.37,0,0,1-.31-.36v-.72a.37.37,0,0,1,.36-.36h.64a.37.37,0,0,1,.37.36h0v.72a.36.36,0,0,1-.36.36Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M3.25,7.21a.37.37,0,0,1-.31-.36V6.1a.37.37,0,0,1,.36-.36h.64a.37.37,0,0,1,.4.34v0h0v.72A.36.36,0,0,1,4,7.21H3.25Z"
                  style="fill: #3d97c3;"
                />
                <path
                  d="M10.1,18.76h4.33V1.44h-13V18.76H5.78V16.23a.36.36,0,0,1,.36-.36h3.6a.36.36,0,0,1,.36.36Zm5.05,1.44H.73A.76.76,0,0,1,0,19.48V.72A.73.73,0,0,1,.73,0H15.15a.73.73,0,0,1,.73.72V19.48A.76.76,0,0,1,15.15,20.2Z"
                  style="fill: #214159;"
                />
              </g>
            </svg>
          </IconCircle>

          <prismic-rich-text :field="data.description" class="rich-text mb-8" />

          <div class="flex justify-between">
            <p class="text-sm font-medium text-blue-4 leading-relaxed">
              {{ $prismic.asText($store.state.miscellaneous.company_name) }}
              <br />
              {{ $prismic.asText($store.state.miscellaneous.street_address) }}
              <br />
              {{ $prismic.asText($store.state.miscellaneous.zip_city) }}
            </p>
            <!-- <Dots index="1">
              <GamlaStan class="w-64" />
            </Dots> -->
          </div>
        </Block>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import IconCircle from '@/components/Common/SVG/IconCircle.vue';

export default {
  components: {
    IconCircle,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
