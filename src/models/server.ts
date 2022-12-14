import express,{ Application} from 'express'
import cors from 'cors'
import taskRoutes from '../routes/task'
import { dbConnection } from '../config/db'
export class Server {

	private app : Application
	private port : string | undefined
	private apiPaths = {
		apiTask: '/api/task'
	}


	constructor() {
		this.app = express()
		this.port = process.env.NODE_ENV === 'dev' ? process.env.PORT_DEVELOPMENT : process.env.PORT
		this.conectedDB()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())

	}

	async conectedDB() {
		await dbConnection()
	}

	routes() {
		this.app.use(this.apiPaths.apiTask, taskRoutes)
	}



	listen(){
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo en ${this.port}`)
		})
	}
}