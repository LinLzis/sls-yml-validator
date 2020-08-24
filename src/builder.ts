import { resolve } from 'path'
import * as TJS from 'typescript-json-schema'
const fs = require('fs')

export function formatTsToJsonSchema(): void {
  // optionally pass argument to schema generator
  const settings: TJS.PartialArgs = { required: true }

  // optionally pass ts compiler options
  const compilerOptions: TJS.CompilerOptions = { strictNullChecks: true }

  // TODO: need to loop resolve all of files path
  const program = TJS.getProgramFromFiles(
    [resolve('./src/schema/scf.ts'), resolve('./src/schema/cos.ts')],
    compilerOptions
  )

  const generator = TJS.buildGenerator(program, settings)

  const cosJson = generator.getSchemaForSymbol('Cos')
  const scfJson = generator.getSchemaForSymbol('Scf')

  fs.writeFileSync('./src/datas/cos.json', JSON.stringify(cosJson))
  fs.writeFileSync('./src/datas/scf.json', JSON.stringify(scfJson))
}

// build json schema files
formatTsToJsonSchema()
