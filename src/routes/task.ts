import {Router} from 'express'
import {getTasks, getTaskById, getTaskByTitle, postTask, updatTask, deleteTask} from '../controllers/task'

const router = Router()


router.get('/', getTasks)
router.get('/search', getTaskByTitle)
router.get('/:id', getTaskById)
router.post('/', postTask)
router.put('/:id', updatTask)
router.delete('/:id', deleteTask)

export default router