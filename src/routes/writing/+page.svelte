<script>
    import Marquee from "svelte-fast-marquee";

    let { data } = $props();
    let page = $state(0);
    const perPage = 100;
    // let totalPages = $derived(Math.ceil(data.data.length / perPage));
    let pageItems = $derived(
        data.data.slice(page * perPage, page * perPage + perPage),
    );
    let hoverImg = $state(null);
    let x = $state(0);
    let y = $state(0);

    function move(e, img) {
        hoverImg = img;
        x = e.clientX;
        y = e.clientY;
    }
</script>

<div class=""></div>
<table class="w-full border-collapse">
    <tbody>
        {#each pageItems as item}
            <tr
                onmousemove={(e) => move(e, item.img)}
                onmouseleave={() => (hoverImg = null)}
                class="border-t border-gray-200 hover:bg-black hover:text-white hover:italic"
            >
                <td class="px-4 py-6 align-top">
                    <a
                        href="/writing/{item.slug}"
                        class="block whitespace-pre-line">{item.year}</a
                    >
                </td>
                <td class="px-4 py-5 align-top">
                    <a href="/writing/{item.slug}" class="block text-xl"
                        >{item.title}</a
                    >

                    <p class="text-gray-600">{item.subtitle}</p>
                    <p class="text-gray-600 ">{item.authors.slice(0, -1).join(', ')}{item.authors.length > 1 ? ' and ' : ''}{item.authors.at(-1)}</p>
                </td>
                <td
                    class="px-4 py-6 align-top text-right text-gray-400 hidden sm:table-cell"
                >
                    <a
                        href="/writing/{item.slug}"
                        class="block italic font-serif">{item.project}</a
                    >
                    <p class="">{item.tags.join(', ')}</p>
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

{#if hoverImg}
    <img
        src={hoverImg}
        class="fixed pointer-events-none w-32 z-50 opacity-95"
        style="top:{y}px; left:{x}px; transform: translate(20px, -50%);"
    />
{/if}

<div class="fixed mt-auto font-medium bg-black text-white bottom-22 md:bottom-17 w-full">
    <Marquee speed={10} gap="1rem"><a class="hover:text-bold" href="https://maurizioberta.bandcamp.com/album/locus-solus">→ Locus Solus - Listen Here ← </a></Marquee>
</div>