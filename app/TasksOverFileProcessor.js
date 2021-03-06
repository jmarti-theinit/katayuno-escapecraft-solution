class TasksOverFileProcessor {

    constructor(fs) {
        this.fs = fs;
    }

    execute(filein, fileout, tasks) {
        const fileContents = this.fs.readFileSync(filein);

        const result = tasks.reduce((content, task) => task.execute(content), fileContents);

        this.fs.writeFileSync(fileout, result);
    }
}

module.exports = TasksOverFileProcessor;