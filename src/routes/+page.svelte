<script lang="ts">
	import { onMount } from 'svelte';
	import QuoteDisplay from '$lib/QuoteDisplay.svelte';
	import { getRandomQuote, type Quote } from '$lib/quotes';
	import MotionApproval from '$lib/MotionApproval.svelte';

	let currentQuote: Quote = $state(getRandomQuote());
	let shaking = $state(false);

	function handleQuoteChange() {
		currentQuote = getRandomQuote();
		// Subtle visual feedback
		shaking = true;
		setTimeout(() => {
			shaking = false;
		}, 300);
	}

</script>

<div class={shaking ? 'scale-95 transition-transform' : 'transition-transform'}>
	<QuoteDisplay quote={currentQuote} onButtonClick={handleQuoteChange} />
	<MotionApproval onshake={handleQuoteChange} />
</div>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
