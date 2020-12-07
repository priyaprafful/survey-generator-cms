<template>
  <Container class="flex flex-col relative">
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
      <Block onethird class="flex flex-col">
        <img
          src="@/assets/svgs/sg-logo-notext.svg"
          alt="SurveyGenerator"
          class="w-12 h-12 mx-auto mb-6"
        />

        <h2 class="mb-6 leading-snug">{{ $t('login.heading') }}</h2>

        <form>
          <div class="flex flex-col mb-6">
            <label for="email" class="text-sm font-medium mb-1">
              {{ $t('login.email') }}
            </label>
            <input
              id="email"
              type="email"
              required
              class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
            />
          </div>

          <div class="flex flex-col mb-6">
            <label for="password" class="text-sm font-medium mb-1">
              {{ $t('login.password') }}
            </label>
            <input
              id="password"
              type="password"
              required
              class="text-sm leading-5 appearance-none block w-full p-3 border border-bluegray-5 rounded-md shadow-sm"
            />
          </div>

          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                class="form-checkbox h-4 w-4 text-blue-2 transition duration-150 ease-in-out"
              />
              <label for="remember_me" class="ml-2 block text-sm leading-5">
                {{ $t('login.remember_me') }}
              </label>
            </div>

            <div class="text-sm leading-5">
              <a href="#" class="font-medium text-blue-4">
                {{ $t('login.forgot_pw') }}
              </a>
            </div>
          </div>

          <MainBtn
            :text="$t('login.sign_in')"
            class="w-full bg-blue-4 hover:bg-blue-3 text-white"
          />
        </form>
      </Block>

      <Block twothird class="bg-blue-9 relative">
        <div class="abstract" />
      </Block>
    </div>
  </Container>
</template>

<script>
export default {
  layout: 'exclusive',
  nuxtI18n: {
    paths: {
      sv: '/logga-in',
      en: '/login',
    },
  },
  head() {
    return {
      title: this.$t('head_title.login') + ' — SurveyGenerator',
    };
  },
};
</script>
