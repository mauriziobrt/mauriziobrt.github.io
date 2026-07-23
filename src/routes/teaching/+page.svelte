<script>
    let { data } = $props();
    let page = $state(0);
    const perPage = 100;
    let totalPages = $derived(Math.ceil(data.data.length / perPage));
    let pageItems = $derived(
        data.data.slice(page * perPage, page * perPage + perPage),
    );
    // let hoverImg = $state(null);
    // let x = $state(0);
    // let y = $state(0);

    // function move(e, img) {
    //     hoverImg = img;
    //     x = e.clientX;
    //     y = e.clientY;
    // }
</script>

<div class=""></div>
<table class="w-full border-collapse">
    <!-- <thead>
        <tr class="text-xs tracking-widest text-gray-500 uppercase">
            <th class="px-4 text-left font-normal pb-4">Year</th>
            <th class="px-4 text-left font-normal pb-4">Title</th>
            <th class="px-4 text-right font-normal pb-4">Project</th>
        </tr>
    </thead> -->
    <tbody>
        {#each pageItems as item}
            <tr
                onmousemove={(e) => move(e, item.img)}
                onmouseleave={() => (hoverImg = null)}
                class="border-t border-gray-200 hover:bg-black hover:text-white hover:italic"
            >
                <td class="px-4 py-6 align-top">
                    <p class="block whitespace-pre-line">{item.year}</p>
                </td>
                <td class="px-4 py-5 align-top">
                    <p class="block text-lg">{item.title}</p>
                </td>
                <td class="px-4 py-6 align-top text-right text-gray-400">
                    <p class=" block italicfont-serif">{item.project}</p>
                    {item.school}
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
</div>

{#if hoverImg}
    <img
        src={hoverImg}
        class="fixed pointer-events-none w-32 z-50 opacity-95"
        style="top:{y}px; left:{x}px; transform: translate(20px, -50%);"
    />
{/if} -->
