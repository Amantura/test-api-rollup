import * as dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT
export const HOST = process.env.HOST

// export const dbParams = {
//   DB_USER: process.env.DB_USER,
//   DB_PASSWORD: process.env.DB_PASSWORD,
//   DB_HOST: process.env.DB_HOST,
//   DB_PORT: process.env.DB_PORT,
//   DB_NAME: process.env.DB_NAME
// }

export const listenParams = {
  port: PORT,
  host: HOST
}

export const loggerConfig = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss Z',
      ignore: 'pid,hostname'
    }
  }
}

export const fastifyConfig = {
  ignoreTrailingSlash: true,
  logger: loggerConfig
}