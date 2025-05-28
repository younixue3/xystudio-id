<script>
  import { onMount } from 'svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';

  export let data;

  onMount(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>{data?.title ? `${data.title} - XY Studio` : 'XY Studio'}</title>
  <meta
    name="description"
    content={data?.description || 'XY Studio - Creative Digital Agency'}
  />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="flex-1 mt-32">
    <slot />
  </main>

  <Footer />
</div>
