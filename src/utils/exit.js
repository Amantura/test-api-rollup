export function shutdownApp(error, code = 1) {
  console.log(error)
  process.exit(code)
}