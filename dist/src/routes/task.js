"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const router = (0, express_1.Router)();
router.get('/', task_1.getTasks);
router.get('/search', task_1.getTaskByTitle);
router.get('/:id', task_1.getTaskById);
router.post('/', task_1.postTask);
router.put('/:id', task_1.updatTask);
router.delete('/:id', task_1.deleteTask);
exports.default = router;
//# sourceMappingURL=task.js.map