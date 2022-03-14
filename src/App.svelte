<script>
	import Router from 'svelte-spa-router'
	
	import routes from './routes'
</script>

<main>
	<Router {routes} />
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>