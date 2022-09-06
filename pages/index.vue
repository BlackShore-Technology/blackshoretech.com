<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
</script>

<template>
  <PageWrapper class="flex-1 flex">
    <div class="background-overlay">
      <div
        class="absolute opacity-75 top-4/8 left-0 h-1/2 max-w-fit w-screen waves"
      />
    </div>
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-2/3 flex flex-col z-10 background-overlay">
          <h1 class="text-center md:text-center">
            <span
              class="drop-shadow-xl text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
            >
              {{ titlesText[0] }}
            </span>
            <span
              class="text-lime-300 drop-shadow-xl text-4xl xl:text-6xl 2xl:text-7xl block font-black uppercase"
            >
              {{ titlesText[1] }}
            </span>
          </h1>
          <div
            class="flex space-x-4 ml-4 mt-10 justify-center md:justify-center"
          >
            <Button
              size="lg"
              text="Nuxt 3"
              class="font-extrabold"
              href="https://v3.nuxtjs.org"
            />
            <Button
              size="lg"
              text="Github"
              type="secondary"
              class="font-extrabold"
              href="https://github.com/BlackShore-Technology"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

.waves {
  /* The image used */
  background: url('@/assets/images/background.svg');

  // /* Set a specific height */
  // height: auto;
  // width: 100%;

  // /* Create the parallax scrolling effect */
  // background-attachment: fixed;
  // background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
