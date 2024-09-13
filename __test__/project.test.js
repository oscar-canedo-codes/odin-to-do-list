import Project from "../src/components/Project";

describe("Project Class", () => {
    it("should add a new task to the project", () => {
        const project = new Project("Test Project");
        const task = { name: "Test Task", getName: () => "Test Task" };

        project.addTask(task);

        expect(project.getTasks().length).toBe(1);
        expect(project.getTasks()[0]).toBe(task);
    });

    describe("Project Class", () => {
        it("should return true if the task exists", () => {
            const project = new Project("Test Project");
            const task = { name: "Test Task", getName: () => "Test Task" };

            project.addTask(task);

            expect(project.checkForTask("Test Task")).toBe(true);
            expect(project.checkForTask("Nonexistent Task")).toBe(false);
        });
    });

    describe("Project Class", () => {
        it("should delete a task from the project", () => {
            const project = new Project("Test Project");
            const task = { name: "Test Task", getName: () => "Test Task" };

            project.addTask(task);
            project.deleteTask("Test Task");

            expect(project.getTasks().length).toBe(0);
        });
    });
});
