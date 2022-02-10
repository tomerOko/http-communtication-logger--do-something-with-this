export class PbWinstonLogger implements PbWinstonLogger {

}

FeatureLogger.logger = createLogger({
    level: this.configs.highestLevelOfLogging, 
    levels: this.configs.levels,
    format: format.combine( 
      this.deepCloneOfLoggedData(),
      this.encryptSensitiveKeys(),
      format.json(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.prettyPrint()
      ),
    defaultMeta: { printedFrom: this.configs.serviceName }, 
    transports: [
      new transports.Console({format:format.combine(format.colorize())}),
      new transports.File({filename: 'fatureLoggerOutput.log'})
    ]
    //todo: ? define exitOnError, handleExceptions
  });