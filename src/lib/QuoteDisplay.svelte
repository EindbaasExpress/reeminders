<script lang="ts">
	import type { Quote } from './quotes';

	let { quote, onButtonClick }: { quote: Quote; onButtonClick: () => void } = $props();
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
	<div class="text-center px-8">
		<h1 class="text-4xl md:text-3xl font-bold text-blue-800 mb-6 transition-all duration-500">Reeminders</h1>
		<div class="mb-8 animate-bounce">
			<svg class="w-16 h-16 mx-auto text-blue-400" fill="currentColor" viewBox="0 0 20 20">
				<path
					d="M10.5 1.5H5.75A4.25 4.25 0 001.5 5.75v8.5A4.25 4.25 0 005.75 18.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0014.25 1.5h-3.75m0 0V.75a.75.75 0 00-1.5 0v.75m0 0h3.75"
				/>
			</svg>
		</div>

		<h2 class="text-5xl md:text-6xl font-bold text-blue-600 mb-6 transition-all duration-500">
			{quote.title}
		</h2>

		<p class="text-2xl md:text-3xl text-blue-800 mb-12 max-w-md mx-auto leading-relaxed transition-all duration-500">
			{quote.message}
		</p>

		<button
			onclick={onButtonClick}
			class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
		>
			Get Another Quote
		</button>

		<p class="text-sm text-blue-500 mt-8">Or shake your device 📱</p>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
