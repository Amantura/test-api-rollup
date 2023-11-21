import { start } from '@/app'
import { shutdownApp } from '@/utils/exit'
import { listenParams } from '@/config'

start()
  .then(app => {
    process.on('unhandledRejection', (error) => shutdownApp(error))
    process.on('uncaughtException', (error) => shutdownApp(error))

    for (const signal of ['SIGINT', 'SIGTERM']) {
      process.on(signal, () => {
        app.close().then(error => shutdownApp(error))
      })
    }

    app.listen(listenParams)
      .then(() => app.log.info('App started on port ' + listenParams.port))
      .catch((error) => shutdownApp(error))
  })