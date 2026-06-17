<svelte:head>
    <title>Leadership Journey</title>
</svelte:head>

<main class="journey-container">
    <div class="background-elements">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
    </div>

    <div class="content">
        <header class="journey-header">
            <h1>Leadership Journey</h1>
            <p class="subtitle">Tracking growth as a Lead Engineer</p>
        </header>

        <section class="focus-area">
            <h2>🎯 Current Leadership Focus</h2>
            <div class="focus-card">
                <p>Growing into the role of Lead Engineer to better support the team</p>
            </div>
        </section>

        <section class="pillars">
            <h2>🚀 Core Development Areas</h2>
            <div class="pillar-grid">
                <div class="pillar">
                    <div class="pillar-icon">📋</div>
                    <h3>Clear Roles & Responsibilities</h3>
                    <p>Ensuring everyone knows their role and expectations</p>
                </div>
                <div class="pillar">
                    <div class="pillar-icon">🤝</div>
                    <h3>Team Alignment</h3>
                    <p>Getting everyone onboard on key decisions</p>
                </div>
                <div class="pillar">
                    <div class="pillar-icon">💬</div>
                    <h3>Focus On Open Questions</h3>
                    <p>Fostering dialogue and collaborative problem-solving</p>
                </div>
            </div>
        </section>

        <section class="reflections">
            <h2>📊 Progress & Impact</h2>
            <div class="reflection-item achieved">
                <h3>✓ Achieved</h3>
                <p>Improved team focus and clearer team structure</p>
            </div>
            <div class="reflection-item achieved">
                <h3>✓ Recognized</h3>
                <p>Received promotion to Senior Big Data Engineer</p>
            </div>
            <div class="reflection-item achieved">
                <h3>✓ Reflected</h3>
                <p>Better self-awareness, both professional and personal</p>
            </div>
        </section>
        <section class="reflections"> 
            <div class="reflection-item next">
                <h3>→ Next Steps</h3>
                <p>Improve coaching skills to better develop team members and support their growth</p>
            </div>
        </section>
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
        max-width: 900px;
        width: 100%;
        padding: 2rem;
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
        opacity: 0.2;
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

    .journey-header {
        text-align: center;
        margin-bottom: 3rem;
        animation: slideInDown 0.6s ease-out;
    }

    .journey-header h1 {
        margin: 0;
        font-size: 3rem;
        color: white;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        letter-spacing: -1px;
        font-weight: 700;
    }

    .subtitle {
        margin: 0.75rem 0 0 0;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1rem;
        font-weight: 300;
        animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    .focus-area {
        margin-bottom: 3rem;
    }

    .focus-area h2,
    .pillars h2,
    .reflections h2 {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        animation: slideInLeft 0.6s ease-out;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        font-weight: 600;
    }

    .focus-card {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-left: 5px solid #667eea;
        animation: slideInRight 0.6s ease-out 0.1s both;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .focus-card:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        transform: translateY(-8px);
    }

    .focus-card p {
        margin: 0;
        font-size: 1.1rem;
        color: #333;
        line-height: 1.6;
    }

    .pillar-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
    }

    .pillar {
        background: white;
        padding: 1.75rem;
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        animation: scaleIn 0.5s ease-out both;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-top: 4px solid #667eea;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .pillar:nth-child(1) {
        animation-delay: 0.2s;
    }

    .pillar:nth-child(2) {
        animation-delay: 0.3s;
    }

    .pillar:nth-child(3) {
        animation-delay: 0.4s;
    }

    .pillar:nth-child(4) {
        animation-delay: 0.5s;
    }

    .pillar:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        transform: translateY(-12px);
    }

    .pillar-icon {
        font-size: 2.5rem;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .pillar:hover .pillar-icon {
        transform: scale(1.2) rotate(5deg);
    }

    .pillar h3 {
        margin: 0;
        color: #667eea;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .pillar p {
        margin: 0;
        color: #666;
        font-size: 0.95rem;
        line-height: 1.5;
        flex-grow: 1;
    }

    .reflections {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-top: 2rem;
    }

    .reflection-item {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        animation: slideInUp 0.6s ease-out both;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        border-top: 4px solid #667eea;
    }

    .reflection-item.achieved {
        animation-delay: 0.6s;
    }

    .reflection-item.next {
        animation-delay: 0.7s;
    }

    .reflection-item:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        transform: translateY(-8px);
    }

    .reflection-item h3 {
        margin: 0 0 0.75rem 0;
        color: #667eea;
        font-size: 1.2rem;
        font-weight: 600;
    }

    .reflection-item p {
        margin: 0;
        color: #666;
        line-height: 1.6;
        font-size: 0.95rem;
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

    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 640px) {
        .content {
            padding: 1rem;
        }

        .journey-header h1 {
            font-size: 2rem;
        }

        .subtitle {
            font-size: 1rem;
        }

        .reflections {
            grid-template-columns: 1fr;
        }

        .pillar {
            padding: 1.5rem 1rem;
        }

        .pillar-icon {
            font-size: 2rem;
        }
    }
</style>