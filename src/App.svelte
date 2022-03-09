<script>
	import Router from 'svelte-spa-router'
	
	import routes from './routes'

	import Header from './components/Header.svelte';
</script>

<Header />
<main>
	<Router {routes} />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}
</style>