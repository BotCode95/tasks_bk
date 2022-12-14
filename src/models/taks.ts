import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
interface ITask {
	title: string
	description: string
	priority: Priorities
	status: Status
}

type Priorities = 1 | 2 | 3
type Status = 'To do' | 'In progress' | 'Done'

// 2. Create a Schema corresponding to the document interface.
const taskSchema = new Schema<ITask>({
	title: { type: String, required: true },
	description: { type: String, required: true },
	priority: {type: Number, default: 1},
	status: {type: String, default: 'To do'}
})

taskSchema.methods.toJSON = function(){
	// eslint-disable-next-line no-unused-vars
	const {__v, ...task} = this.toObject()

	return task
}

// 3. Create a Model.
export const Task = model<ITask>('Task', taskSchema)