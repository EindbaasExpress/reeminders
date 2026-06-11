<script lang="ts">
	import MotionApproval from './MotionApproval.svelte';
	import type { Quote } from './quotes';

	let { quote, onButtonClick }: { quote: Quote; onButtonClick: () => void } = $props();

	interface Snowflake {
		id: number;
		x: number;       // vw
		size: number;    // px
		duration: number; // s
		delay: number;   // s
	}

	let snowflakes: Snowflake[] = $state([]);
	let nextId = 0;

	function triggerSnow() {
		const flakes: Snowflake[] = Array.from({ length: 150 }, () => ({
			id: nextId++,
			x: Math.random() * 100,
			size: 6 + Math.random() * 10,
			duration: 2 + Math.random() * 3,
			delay: Math.random() * 1.2,
		}));
		snowflakes = [...snowflakes, ...flakes];
		// Clean up after the longest possible animation
		setTimeout(() => {
			const ids = new Set(flakes.map(f => f.id));
			snowflakes = snowflakes.filter(f => !ids.has(f.id));
		}, (2 + 3 + 1.2) * 4000);
	}

	function handleButtonClick() {
		triggerSnow();
		onButtonClick();
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
	<div class="text-center px-8">
		<h1 class="text-4xl md:text-3xl font-bold text-blue-800 mb-6 transition-all duration-500">Reeminders</h1>

		<h2 class="text-5xl md:text-6xl font-bold text-blue-600 mb-6 transition-all duration-500">
			{quote.title}
		</h2>

		<p class="text-2xl md:text-3xl text-blue-800 mb-12 max-w-md mx-auto leading-relaxed transition-all duration-500">
			{quote.message}
		</p>

		<button
			onclick={handleButtonClick}
			class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
		>
			Get Another Quote
		</button>

		<p class="text-sm text-blue-500 mt-8">Or shake your device (tested on iOS Safari) 📱</p>
		<MotionApproval onshake={handleButtonClick} />
	</div>
</div>

<!-- Snow overlay -->
{#each snowflakes as flake (flake.id)}
	<span
		class="snowflake"
		style="left:{flake.x}vw; width:{flake.size}px; height:{flake.size}px; animation-duration:{flake.duration}s; animation-delay:{flake.delay}s"
	>❄</span>
{/each}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.snowflake {
		position: fixed;
		top: -2rem;
		pointer-events: none;
		user-select: none;
		color: #93c5fd;
		opacity: 0.9;
		animation: snowfall linear forwards;
		z-index: 50;
	}

	@keyframes snowfall {
		0%   { transform: translateY(0) rotate(0deg);   opacity: 0.9; }
		80%  { opacity: 0.8; }
		100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
	}
</style>
