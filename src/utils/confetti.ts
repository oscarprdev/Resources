interface ConfettiDot {
	x: number;
	y: number;
	radius: number;
	color: string;
	speedX: number;
	speedY: number;
	decay: number;
	opacity: number;
}

const CONFETTI_COLOR = '#6aff97';

export const useConfetti = (resourceCard: HTMLElement, resourceId: string, isGrid: boolean) => {
	let confetti: ConfettiDot[] = [];

	const canvas = document.getElementById(`confetti-canvas-${resourceId}`) as HTMLCanvasElement;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

	const rectw = resourceCard?.getBoundingClientRect();
	const margin = isGrid ? 32 : 20;
	const speedMultiplier = isGrid ? 0.8 : 0.5;
	const radius = isGrid ? 3 : 2;

	canvas.width = rectw.width;
	canvas.height = rectw.height;

	function createConfetti(x: number, y: number) {
		const numDots = 15;
		confetti = [];
		for (let i = 0; i < numDots; i++) {
			const angle = Math.random() * 1.7 * Math.PI;
			const speed = Math.random() * 1 + speedMultiplier; // Speed between 2 and 6
			confetti.push({
				x: x,
				y: y,
				radius: Math.random() * radius + 1, // Radius between 2 and 5
				color: CONFETTI_COLOR,
				speedX: Math.cos(angle) * speed,
				speedY: Math.sin(angle) * speed,
				decay: Math.random() * 0.015 + 0.03, // Fade-out rate
				opacity: 1,
			});
		}
	}

	// Function to draw confetti
	function drawConfetti() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		confetti.forEach((dot, index) => {
			if (dot.opacity <= 0) {
				confetti.splice(index, 1); // Remove faded-out confetti
				return;
			}

			// Draw the dot
			ctx.beginPath();
			ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 1.3);
			ctx.fillStyle = CONFETTI_COLOR;
			ctx.fill();

			// Update position and fade-out
			dot.x += dot.speedX;
			dot.y += dot.speedY;
			dot.opacity -= dot.decay;
		});

		if (confetti.length > 0) {
			requestAnimationFrame(drawConfetti);
		}
	}

	const rect = resourceCard?.getBoundingClientRect();

	const x = rect.width - margin;
	const y = margin;

	createConfetti(x, y);
	drawConfetti();

	setTimeout(() => {
		confetti = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}, 1000);
};
