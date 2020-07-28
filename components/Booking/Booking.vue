<template>
  <Wrapper>
    <Container class="flex relative">
      <Particles
        id="tsparticles"
        class="absolute top-0 right-0 left-0 bottom-0"
        :options="{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
                speed: 3,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#DADEE8',
            },
            links: {
              color: '#DADEE8',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }"
      />

      <div class="flex z-10">
        <Block half class="leading-relaxed">
          <prismic-rich-text :field="data.heading" class="mb-8" />
          <prismic-rich-text :field="data.content" class="mb-8 booking" />
        </Block>

        <Block half>
          <form class="bg-blue-9 p-12 rounded-lg">
            <h3 class="text-green-400 text-xl mb-6">
              Fyll i formuläret så kontaktar vi dig!
            </h3>

            <div class="flex flex-col mb-6">
              <label for="name" class="text-sm text-white font-medium mb-1">
                Namn
              </label>
              <input
                id="name"
                type="text"
                required
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <div class="flex flex-col mb-6">
              <label for="email" class="text-sm text-white font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <div class="flex flex-col mb-6">
              <label for="company" class="text-sm text-white font-medium mb-1">
                Företag
              </label>
              <input
                id="company"
                type="text"
                required
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <div class="flex flex-col mb-6">
              <label for="phone" class="text-sm text-white font-medium mb-1">
                Telefonnummer
              </label>
              <input
                id="phone"
                type="tel"
                class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
              />
            </div>

            <MainBtn
              text="Boka demo"
              class="w-full text-blue-9 bg-green-400 hover:bg-green-300"
            />
          </form>
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

<style>
.booking p,
.booking ul {
  margin-bottom: 1.5rem;
}

.booking p:last-child,
.booking ul:last-child,
.booking li:last-child {
  margin-bottom: 0;
}

.booking h3 {
  margin-bottom: 1rem;
}

.booking li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.booking li:before {
  content: '';
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  background-image: url('./plus.svg');
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: 2rem;
}
</style>
