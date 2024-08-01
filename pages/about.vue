<template>
  <section>
    <h1 class="my-6 text-xl font-bold">About me</h1>
    <div class="flex flex-col space-y-5">
      <p>
        <em>Hey there!</em> 👋🏾. I'm Alfredo, a Software FrontEnd Engineer based
        in León, that loves to code and build products using Vue, Nuxt and
        TailwindCSS ecosystem.
      </p>
      <p>
        Currently working at
        <NuxtLink
          to="https://www.pemex.com/Paginas/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2"
        >
          Pemex
        </NuxtLink>
        as a FrontEnd Web Engineer, building a platform for contract management.
        Before that I worked at a content creators platform startup
        <NuxtLink
          to="https://joinbrands.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline underline-offset-2"
        >
          joinbrands
        </NuxtLink>
        , to make branded UGC.
      </p>
      <p>
        I am passionate about working at the intersection of product,
        engineering, and developer experience. I get excited by TailwindCSS,
        Vue, serverless technologies, Open Source, frontend simplicity, and
        minimalism. I love automating processes, building user-centric products,
        and enjoying a good cappuccino during a productive workday.
      </p>
      <p>
        I was born and raised in León, Guanajuato, Mexico and come from studying
        Computer Systems Engineering
      </p>
      <p>
        Outside of work, I'm obsessed with sports, attending concerts, walking
        with Puppy and
        <NuxtLink class="underline underline-offset-2" to="/photos">
          travelling
        </NuxtLink>
        .
      </p>
      <PhotosSlider />
    </div>
  </section>
</template>

<script setup lang="ts">
defineOptions({
  name: 'About',
});
</script>
