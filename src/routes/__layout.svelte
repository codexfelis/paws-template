<script>
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';

	import '../style.css';
	import '../nord.css';
</script>

<Navbar />
<main id="main">
	<slot />
</main>
<Footer />
