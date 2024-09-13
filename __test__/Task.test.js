import Task from "../src/components/Task";

describe("Task Class", () => {
    it("Task constructor sets name and default due date", () => {
        const task = new Task("Buy groceries");
        expect(task.getName()).toBe("Buy groceries");
        expect(task.getDate()).toBe("No date");
    });

    describe("Task constructor sets name and default due date", () => {
        const task = new Task("Buy groceries");
        expect(task.getName()).toBe("Buy groceries");
        expect(task.getDate()).toBe("No date");
    });

    describe("setDate updates the due date", () => {
        const task = new Task("Call mom");
        task.setDate("10/25/2024");
        expect(task.getDate()).toBe("10/25/2024");
    });

    test("getDateFormatted returns formatted date", () => {
        const task = new Task("Finish project", "2024-09-14");
        expect(task.getDateFormatted()).toBe("09/14/2024");
    });
});
