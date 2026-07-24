<script>
    let { data } = $props();
    let page = $state(0);
    const perPage = 20;
    let totalPages = $derived(Math.ceil(data.data.length / perPage));
    let pageItems = $derived(
        data.data.slice(page * perPage, page * perPage + perPage),
    );
</script>

<table class="w-full border-collapse table-fixed">
  <colgroup>
    <col class="w-58" />   <!-- image -->
    <col class="w-20" />   <!-- year -->
    <col class="w-auto" /> <!-- title, takes remaining space -->
    <col class="w-48 hidden sm:table-column" />   <!-- project -->
  </colgroup>
  <tbody>
    {#each pageItems as item}
      <tr class="border-t border-gray-200 hover:bg-black hover:text-white hover:italic">
        <td class="pr-4 align-top">
          <a href="/discography/{item.slug}">
            <img src={item.img} alt={item.title} class="w-full" />
          </a>
        </td>

        <td class="py-4 pr-4 align-top">
          <a href="/discography/{item.slug}" class="block whitespace-pre-line"
            >{item.year}</a
          >
        </td>

        <td class="py-4 pr-4 align-top">
          <a href="/discography/{item.slug}" class="block text-lg"
            >{item.title}</a
          >
        </td>

        <td class="py-4 align-top hidden sm:table-cell">
          <a
            href="/discography/{item.slug}"
            class="block italic text-gray-400 font-serif"
            >{item.project}</a
          >
        </td>
      </tr>
    {/each}
  </tbody>
</table>
<!-- <div class="px-4">
    <div class="flex justify-between items-center mt-6 text-sm">
        <button
            disabled={page === 0}
            onclick={() => page--}
            class="disabled:opacity-30">Prev</button
        >
        <span>{page + 1} / {totalPages}</span>
        <button
            disabled={page === totalPages - 1}
            onclick={() => page++}
            class="disabled:opacity-30">Next</button
        >
    </div>
</div> -->

