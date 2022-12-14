"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updatTask = exports.postTask = exports.getTaskByTitle = exports.getTaskById = exports.getTasks = void 0;
const taks_1 = require("../models/taks");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taks_1.Task.find();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTasks = getTasks;
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield taks_1.Task.findById(id);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTaskById = getTaskById;
const getTaskByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.query;
    try {
        const task = yield taks_1.Task.find({ title });
        if (!task.length) {
            return res.status(400).json({ message: 'the search returned no results' });
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTaskByTitle = getTaskByTitle;
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority } = req.body;
    try {
        const task = new taks_1.Task({ title, description, priority });
        yield task.save();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.postTask = postTask;
const updatTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield taks_1.Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updatTask = updatTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield taks_1.Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'task deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map