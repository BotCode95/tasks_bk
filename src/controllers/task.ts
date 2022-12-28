import { Request, Response } from 'express'
import { Task } from '../models/taks'
export const getTasks = async (req: Request, res: Response) => {
	try {
		const task = await Task.find()
        
		res.status(200).json(task)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}


export const getTaskById = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		const task = await Task.findById(id)
        
		res.status(200).json(task)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const getTaskByTitle = async (req:Request, res:Response) => {
	const {title} = req.query
	try {
		const task = await Task.find({title})

		if(!task.length) {
			return res.status(400).json({message: 'the search returned no results'})
		}
        
		res.status(200).json(task)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const postTask =async (req:Request, res:Response) => {

	const {title, description, priority, status} = req.body
	try {
		const task = new Task({title, description, priority, status})


		await task.save()
        
		res.status(200).json(task)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const updatTask = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		const task = await Task.findByIdAndUpdate(id, req.body, {new:true})
        
		res.status(200).json(task)
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}

export const deleteTask = async (req:Request, res:Response) => {
	const {id} = req.params
	try {
		await Task.findByIdAndDelete(id)
        
		res.status(200).json({message: 'task deleted successfully'})
	} catch (error: any) {
		res.status(500).json({message: error.message})
	}
}