<script lang="ts">
	import LearningDisplay from '$lib/LearningDisplay.svelte';
	import { getRandomLearning, type Learning } from '$lib/learnings';
	import MotionApproval from '$lib/MotionApproval.svelte';

	let currentLearning: Learning = $state(getRandomLearning());
	let shaking = $state(false);

	function handleLearningChange() {
		currentLearning = getRandomLearning();
		// Subtle visual feedback
		shaking = true;
		setTimeout(() => {
			shaking = false;
		}, 300);
	}
</script>

<div class={shaking ? 'scale-95 transition-transform' : 'transition-transform'}>
	<LearningDisplay learning={currentLearning} onButtonClick={handleLearningChange} />
	<MotionApproval onshake={handleLearningChange} />
</div>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
