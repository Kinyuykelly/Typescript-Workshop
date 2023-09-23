// running test on arrow-cat fuction in chapter3 exercise 3.03
import {capitalize} from '../exercise 3.03/arrow-cat';
describe("should capitalize the string", () => {
    test("capitalize", () => {
        expect(capitalize("HELLO")).toBe("Hello");
    });
});