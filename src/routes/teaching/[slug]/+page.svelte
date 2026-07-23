<script>
  let { data } = $props();
</script>

<div class="flex h-[40vh] md:h-[70vh] lg:h-[90vh] items-center justify-center">
  <img class="max-h-full w-auto mx-auto" src={data.meta.img} />
</div>
<!-- <div class="px-6">
  <h1 class="font-serif text-3xl italic uppercase">{data.meta.title}</h1>
  <p>{data.meta.year}</p>
  <p>{data.meta.project}</p>

  <data.content />
</div> -->

<div class="px-6 prose max-w-none">
  <h1 class="not-prose font-serif text-3xl italic uppercase">{data.meta.title}</h1>
  <p class="not-prose">{data.meta.year}</p>
  <p class="not-prose">{data.meta.project}</p>

  <data.content />
</div>