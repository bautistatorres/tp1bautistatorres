const tasks = require("../tasksData");


const find = (title) => {

    for (let i = 0; i < tasks.length; i++) {
        console.log("i = ", i);
    if (tasks[i].title === title) {
    return true;
    }
    }


    return false;
};

module.exports = find;

