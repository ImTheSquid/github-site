<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</svelte:head>

<Router {routes} />

<style>
  :global(body) {
		--watermelon-color: rgba(255,64,80,1);
		font-family: Roboto, sans-serif;
	}
</style>