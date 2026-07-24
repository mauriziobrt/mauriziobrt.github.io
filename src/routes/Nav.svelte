<!-- <script lang="ts">
    import { page } from '$app/state';
    import "../app.css";
</script>
<div class="fixed top-0 z-50 bg-neutral-50 w-full">
<nav class="px-3 py-1  grid grid-flow-col grid-rows-1 gap-1 lowercase text-lg">
    <div class="uppercase"><a href="/">Maurizio Berta</a></div>
    <div></div>
    <div class:italic={page.url.pathname.startsWith('/project')} class="hover:uppercase"><a href="/project">Projects</a></div>
    <div class:italic={page.url.pathname.startsWith( '/writing')} class="hover:uppercase"><a href="/writing">Writing</a></div>
    <div class:italic={page.url.pathname.startsWith('/teaching')} class="hover:uppercase"><a href="/teaching">Teaching</a></div>
    <div class:italic={page.url.pathname.startsWith('/discography')} class="hover:uppercase"><a href="/discography">Discography</a></div>
    <div class:italic={page.url.pathname.startsWith('/about')} class="hover:uppercase"><a href="/about">About</a></div>
</nav>
<hr />
</div> -->

<script lang="ts">
    import { page } from '$app/state';
    import "../app.css";

    let menuOpen = $state(false);

    const links = [
        { href: '/project', label: 'Projects' },
        { href: '/writing', label: 'Writing' },
        { href: '/teaching', label: 'Teaching' },
        { href: '/discography', label: 'Discography' },
        { href: '/about', label: 'About' },
    ];
</script>

<div class="fixed top-0 z-50 bg-neutral-50 w-full">
    <nav class="px-3 py-1 flex items-center justify-between lowercase text-lg">
        <div class="uppercase"><a href="/">Maurizio Berta</a></div>

        <!-- Desktop links: hidden below md, grid from md up -->
        <div class="hidden md:grid md:grid-flow-col md:gap-4">
            {#each links as { href, label }}
                <div class:italic={page.url.pathname.startsWith(href)} class="hover:uppercase">
                    <a {href}>{label}</a>
                </div>
            {/each}
        </div>

        <!-- Hamburger button: visible only below md -->
        <button
            class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onclick={() => (menuOpen = !menuOpen)}
        >
            <span class="block h-0.5 w-6 bg-neutral-900 transition-transform duration-200"
                class:rotate-45={menuOpen}
                class:translate-y-2={menuOpen}
            ></span>
            <span class="block h-0.5 w-6 bg-neutral-900 transition-opacity duration-200"
                class:opacity-0={menuOpen}
            ></span>
            <span class="block h-0.5 w-6 bg-neutral-900 transition-transform duration-200"
                class:-rotate-45={menuOpen}
                class:-translate-y-2={menuOpen}
            ></span>
        </button>
    </nav>
    <hr />

    <!-- Mobile dropdown menu -->
    {#if menuOpen}
        <nav class="md:hidden flex flex-col px-3 py-2 gap-2 lowercase text-lg bg-neutral-50 border-t">
            {#each links as { href, label }}
                <div
                    class:italic={page.url.pathname.startsWith(href)}
                    class="hover:uppercase"
                >
                    <a {href} onclick={() => (menuOpen = false)}>{label}</a>
                </div>
            {/each}
        </nav>
    {/if}
</div>