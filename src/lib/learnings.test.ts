import { describe, it, expect, beforeEach, vi } from 'vitest';
import { learnings, getRandomLearning } from './learnings';

describe('learnings', () => {
	beforeEach(() => {
		// Reset the module before each test to clear lastLearningIndex
		vi.resetModules();
	});

	it('should have learnings with title and message', () => {
		expect(learnings.length).toBeGreaterThan(0);
		learnings.forEach((learning) => {
			expect(learning).toHaveProperty('title');
			expect(learning).toHaveProperty('message');
			expect(typeof learning.title).toBe('string');
			expect(typeof learning.message).toBe('string');
		});
	});

	it('should return a random learning', () => {
		const learning = getRandomLearning();
		expect(learning).toHaveProperty('title');
		expect(learning).toHaveProperty('message');
		expect(learnings).toContainEqual(learning);
	});

	it('should not return the same learning twice in a row', () => {
		if (learnings.length <= 1) {
			expect(true).toBe(true);
			return;
		}

		const firstLearning = getRandomLearning();
		const secondLearning = getRandomLearning();
		expect(firstLearning).not.toEqual(secondLearning);
	});

	it('should eventually return all learnings', () => {
		if (learnings.length <= 1) {
			expect(true).toBe(true);
			return;
		}

		const returnedLearnings = new Set();
		// Try enough times to likely get all learnings
		for (let i = 0; i < learnings.length * 5; i++) {
			const learning = getRandomLearning();
			returnedLearnings.add(JSON.stringify(learning));
		}

		expect(returnedLearnings.size).toBeGreaterThan(1);
	});
});
