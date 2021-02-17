import { performOperation, performCalculation } from "../calculator";

describe('performOperation()', () => {
	describe('subtraction', () => {
		it("3-2=1", () => {
		  expect(performOperation('-', 3, 2)).toBe(1);
		});
	});

	describe('multiplication', () => {
		it("6*2=12", () => {
		  expect(performOperation('*', 6, 2)).toBe(12);
		});
	});

	describe('division', () => {
		it("6/2=3", () => {
		  expect(performOperation('/', 6, 2)).toBe(3);
		});
	});

	describe('addition', () => {
		it("6+4=10", () => {
			expect(performOperation('+', 6, 4)).toBe(10);
		});
	});
});

describe('performCalculation()', () => {
	it("3-2=1", () => {
	  expect(performCalculation([3, '-', 2])).toBe(1);
	});

	it("3*4-2+5/3", () => {
	  expect(performCalculation([3,'*',4,'-',2,'+',5,'/',3])).toBe(5);
	});

	it("empty", () => {
	  expect(performCalculation([])).toBe("Nothing to calculate");
	});
});
