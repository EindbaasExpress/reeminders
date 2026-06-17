<svelte:head>
	<title>Reeminders</title>
</svelte:head>

<main class="home">
	<div class="content">
		<div class="header-container">
			<h1 class="title">Reeminders</h1>
			<p class="subtitle">Your personal development hub</p>
		</div>

		<nav class="nav-container">
			<a href="/reeminders/reeminders" class="nav-card reeminders-card">
				<div class="card-icon">📝</div>
				<h2>Reeminders</h2>
				<p>Daily learning and reflections</p>
			</a>
			<a href="/reeminders/journey" class="nav-card journey-card">
				<div class="card-icon">🚀</div>
				<h2>Journey</h2>
				<p>Leadership development tracker</p>
			</a>
		</nav>
	</div>

	<div class="background-elements">
		<div class="orb orb-1"></div>
		<div class="orb orb-2"></div>
		<div class="orb orb-3"></div>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		display: grid;
		place-items: center;
		overflow: hidden;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	}

	.content {
		position: relative;
		z-index: 2;
		text-align: center;
		max-width: 600px;
		width: 100%;
		padding: 2rem;
		animation: fadeInDown 0.8s ease-out;
	}

	.header-container {
		margin-bottom: 3rem;
	}

	.title {
		margin: 0 0 0.5rem 0;
		font-size: 3.5rem;
		font-weight: 700;
		color: white;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
		letter-spacing: -1px;
	}

	.subtitle {
		margin: 0;
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 300;
		animation: fadeInUp 0.8s ease-out 0.2s both;
	}

	.nav-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.nav-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 2rem 1.5rem;
		background: white;
		border-radius: 1rem;
		text-decoration: none;
		color: #333;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		border: 2px solid transparent;
		animation: fadeInUp 0.8s ease-out both;
		position: relative;
		overflow: hidden;
	}

	.nav-card:nth-child(1) {
		animation-delay: 0.3s;
	}

	.nav-card:nth-child(2) {
		animation-delay: 0.4s;
	}

	.nav-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%);
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.nav-card:hover {
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.nav-card:hover::before {
		opacity: 1;
	}

	.reeminders-card {
		border-color: #667eea;
	}

	.reeminders-card:hover {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.journey-card {
		border-color: #764ba2;
	}

	.journey-card:hover {
		background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
		color: white;
	}

	.card-icon {
		font-size: 2.5rem;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.nav-card:hover .card-icon {
		transform: scale(1.15) rotate(5deg);
	}

	.nav-card h2 {
		margin: 0;
		font-size: 1.4rem;
		font-weight: 600;
		transition: inherit;
	}

	.nav-card p {
		margin: 0;
		font-size: 0.9rem;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}

	.nav-card:hover p {
		opacity: 1;
	}

	.background-elements {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		pointer-events: none;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.3;
		mix-blend-mode: screen;
	}

	.orb-1 {
		width: 300px;
		height: 300px;
		background: rgba(255, 255, 255, 0.3);
		top: -100px;
		right: -100px;
		animation: float 8s ease-in-out infinite;
	}

	.orb-2 {
		width: 200px;
		height: 200px;
		background: rgba(102, 126, 234, 0.4);
		bottom: 100px;
		left: -50px;
		animation: float 10s ease-in-out infinite reverse;
	}

	.orb-3 {
		width: 250px;
		height: 250px;
		background: rgba(118, 75, 162, 0.3);
		bottom: -50px;
		right: 10%;
		animation: float 12s ease-in-out infinite;
	}

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0) translateX(0);
		}
		50% {
			transform: translateY(-20px) translateX(10px);
		}
	}

	@media (max-width: 640px) {
		.title {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.nav-container {
			grid-template-columns: 1fr;
		}

		.nav-card {
			padding: 1.5rem 1rem;
		}

		.card-icon {
			font-size: 2rem;
		}

		.nav-card h2 {
			font-size: 1.2rem;
		}
	}
</style>
