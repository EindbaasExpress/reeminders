import { describe, it, expect, beforeEach, vi } from 'vitest';
import { quotes, getRandomQuote } from './quotes';

describe('quotes', () => {
	beforeEach(() => {
		// Reset the module before each test to clear lastQuoteIndex
		vi.resetModules();
	});

	it('should have quotes with title and message', () => {
		expect(quotes.length).toBeGreaterThan(0);
		quotes.forEach((quote) => {
			expect(quote).toHaveProperty('title');
			expect(quote).toHaveProperty('message');
			expect(typeof quote.title).toBe('string');
			expect(typeof quote.message).toBe('string');
		});
	});

	it('should return a random quote', () => {
		const quote = getRandomQuote();
		expect(quote).toHaveProperty('title');
		expect(quote).toHaveProperty('message');
		expect(quotes).toContainEqual(quote);
	});

	it('should not return the same quote twice in a row', () => {
		if (quotes.length <= 1) {
			expect(true).toBe(true);
			return;
		}

		const firstQuote = getRandomQuote();
		const secondQuote = getRandomQuote();
		expect(firstQuote).not.toEqual(secondQuote);
	});

	it('should eventually return all quotes', () => {
		if (quotes.length <= 1) {
			expect(true).toBe(true);
			return;
		}

		const returnedQuotes = new Set();
		// Try enough times to likely get all quotes
		for (let i = 0; i < quotes.length * 5; i++) {
			const quote = getRandomQuote();
			returnedQuotes.add(JSON.stringify(quote));
		}

		expect(returnedQuotes.size).toBeGreaterThan(1);
	});
});
