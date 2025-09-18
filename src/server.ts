import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger , errorlogger} from './Shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected SuccessFully')

    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('failed to connect database', err)
  }
}
bootstrap()

// hi mere
