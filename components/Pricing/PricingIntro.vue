<template>
  <Wrapper>
    <Container>
      <div class="flex">
        <Block half class="leading-loose">
          <IconCircle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 26.33">
              <g>
                <line
                  x1="4.8"
                  y1="6.06"
                  x2="16.87"
                  y2="6.06"
                  style="fill: none; stroke: #43a8d8; stroke-linecap: square;"
                />
                <line
                  x1="4.8"
                  y1="10.68"
                  x2="16.87"
                  y2="10.68"
                  style="fill: none; stroke: #43a8d8; stroke-linecap: square;"
                />
                <line
                  x1="4.8"
                  y1="8.37"
                  x2="16.87"
                  y2="8.37"
                  style="fill: none; stroke: #43a8d8; stroke-linecap: square;"
                />
                <path
                  d="M52.38,81.85a1.33,1.33,0,0,1,.24-.75,2.23,2.23,0,0,1,.52-.57,3.6,3.6,0,0,0,.51-.52.92.92,0,0,0,.24-.59.58.58,0,0,0-.22-.48,1,1,0,0,0-.6-.17,1.09,1.09,0,0,0-1.06.8L51,79a2,2,0,0,1,.85-1,2.36,2.36,0,0,1,1.31-.37,2.19,2.19,0,0,1,1.4.47,1.57,1.57,0,0,1,.6,1.29A1.5,1.5,0,0,1,55,80a2.21,2.21,0,0,1-.37.55l-.44.43a2.89,2.89,0,0,0-.38.41.77.77,0,0,0-.15.43Zm1.16,2a.74.74,0,0,1-.54.23.79.79,0,0,1-.76-.76.74.74,0,0,1,.23-.54.69.69,0,0,1,.53-.22.75.75,0,0,1,.76.76A.69.69,0,0,1,53.54,83.84Z"
                  transform="translate(-42.2 -63.03)"
                  style="fill: #43a8d8;"
                />
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
              </g>
            </svg>
          </IconCircle>
          <h2 class="mb-6">Lorem ipsum dolor sit</h2>
          <p>
            Du kan antingen köpa en enstaka enkät, eller ett abonnemang med
            obegränsat antal enkäter.
          </p>
          <br />
          <p>
            Vilken form som passar dig bäst beror på hur många undersökningar,
            utvärderingar eller andra typer av enkäter du planerar att
            genomföra. Oavsett betalar du bara för nyttjandet av vårt verktyg,
            och slipper kostnader för drift och support.
          </p>
        </Block>

        <Block half>
          <div class="bg-blue-2 w-full h-full" />
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
};
</script>
