<script>
    import Navbar from '../components/Navbar.svelte'
    import { metatags } from '@roxi/routify';
    
    metatags.title = 'My Routify app';
    metatags.description = 'Description coming soon...';
</script>


<Navbar/>
<main>
	<h1>ImTheSquid's Github IO Page</h1>
</main>

<style>


	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: var(--watermelon-color);
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	
</style>