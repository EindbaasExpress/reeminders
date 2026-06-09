export interface Quote {
	title: string;
	message: string;
}

export const quotes: Quote[] = [
	{ title: 'Believe', message: 'In yourself and all that you are.' },
	{ title: 'Motivation', message: 'The difference between who you are and who you want to be is what you do.' },
	{ title: 'Growth', message: 'Every challenge is a chance to grow stronger.' },
	{ title: 'Dream', message: 'Your dreams are worth pursuing.' },
	{ title: 'Strength', message: 'You are stronger than you think.' },
	{ title: 'Progress', message: 'Every step forward counts, no matter how small.' },
	{ title: 'Courage', message: 'Do what scares you, that\'s where growth lives.' },
	{ title: 'Success', message: 'Success is the sum of small efforts over time.' },
	{ title: 'Inspire', message: 'Be the inspiration you wish to see.' },
	{ title: 'Endless', message: 'Your potential is endless.' },
	{ title: 'Create', message: 'Create the life you want to live.' },
	{ title: 'Magic', message: 'You are made of magic and wonder.' }
];

let lastQuoteIndex = -1;

export function getRandomQuote(): Quote {
	let randomIndex: number;
	do {
		randomIndex = Math.floor(Math.random() * quotes.length);
	} while (randomIndex === lastQuoteIndex && quotes.length > 1);

	lastQuoteIndex = randomIndex;
	return quotes[randomIndex];
}
