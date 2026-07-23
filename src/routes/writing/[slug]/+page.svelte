<!-- <script>
  let { data } = $props();
</script>

<div class="flex h-[40vh] md:h-[70vh] lg:h-[90vh] items-center justify-center">
  <img class="max-h-full w-auto mx-auto" src={data.meta.img} />
</div>

<div class="px-6 prose max-w-none">
  <h1 class="not-prose font-serif text-3xl italic uppercase">{data.meta.title}</h1>
  <p class="not-prose">{data.meta.year}</p>
  <p class="not-prose">{data.meta.project}</p>

  <data.content />
</div> -->

<script>
  let { data } = $props();
</script>

<div class="flex flex-col md:flex-row md:items-start">
  <div class="flex h-[40vh] md:h-[90vh] items-center justify-center md:w-1/2">
    <img class="max-h-full w-auto mx-auto" src={data.meta.img} />
  </div>

  <div class="px-6 py-6 prose max-w-none md:w-1/2">
    <h1 class="not-prose font-serif text-3xl italic uppercase">{data.meta.title}</h1>
    <p class="not-prose">{data.meta.year}</p>
    <p class="not-prose">{data.meta.project}</p>

    <data.content />
  </div>
</div>