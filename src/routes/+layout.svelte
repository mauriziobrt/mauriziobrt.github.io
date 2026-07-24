<script lang="ts">
    import favicon from '$lib/assets/favicon.svg';
    import { page } from '$app/state';
    import "../app.css";
    import Footer from './Footer.svelte';
    import Nav from './Nav.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Nav />
<div class="pt-9"></div>
{@render children()}
<div class="pt-24 md:pt-20"></div>
<Footer />