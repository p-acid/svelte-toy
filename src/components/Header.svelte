<script>
    import { link } from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'

    const headerItems = [
        {
            url: '/',
            name: 'Home'
        },
        {
            url: '/about',
            name: 'About'
        }
    ]
</script>

<header>
    {#each headerItems as item}
        <a href={item.url} use:link use:active>
            {item.name}
        </a>
    {/each}
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
    }

    :global(header a.active) {
      font-weight: bold;
      text-decoration: underline;
    }
</style>
  