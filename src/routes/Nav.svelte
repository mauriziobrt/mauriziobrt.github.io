<script lang="ts">
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
</div>
