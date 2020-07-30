<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <prismic-rich-text
        :field="data.features_title"
        class="text-center mb-16"
      />

      <div class="flex leading-relaxed justify-between mt-8">
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">Matrisfrågor</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            ipsum urna, ornare vitae lacinia eget, finibus ac augue. Proin
            convallis euismod rutrum. Sed quam libero, dictum quis tempus eu,
            rhoncus at tortor. Etiam eget vulputate odio. Donec varius euismod
            ligula, facilisis tincidunt massa dignissim nec.
          </p>
        </Block>
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">Rådatarapporter</h3>
          <p>
            Nullam ullamcorper nisl sed quam sagittis efficitur. Donec in mattis
            quam. Nulla ligula nisl, varius vitae urna ac, suscipit varius
            neque. Quisque consectetur, augue quis mattis semper, neque est
            luctus ante, vitae faucibus orci ipsum vel mauris. Phasellus et
            scelerisque felis, sit amet tempus leo.
          </p>
        </Block>
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">Tillval</h3>
          <p>
            In vitae mattis risus. Curabitur mattis, risus vel rhoncus
            hendrerit, nunc nisl finibus erat, vitae tempor ex erat in leo. Cras
            eget mi urna. Duis eget gravida ipsum, a tristique nulla. Phasellus
            et scelerisque felis, sit amet tempus leo.
          </p>
        </Block>
      </div>
    </Container>
  </section>
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
