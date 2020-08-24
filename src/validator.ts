const SRC_REQUIRED_COMPONENT_LIST: string[] = ['scf', 'cos']

/* ZipSrc: src(required),bucket,exclude */
/* BucketSrc: bucket(required),object(required) */
interface SrcObj {
  src?: string
  bucket?: string
  exclude?: string[]
  object?: string
}

const validateSrc = (type: string, src: string | SrcObj): boolean => {
  let isValid: boolean = true
  const pathRegxPattern = /.*\// // TODO: upgrade regx pattern
  if (SRC_REQUIRED_COMPONENT_LIST.includes(type)) {
    if (src.toString() === '[object Object]') {
      if ((src as SrcObj).src) {
        const filePath: string = (src as SrcObj)?.src
        isValid = pathRegxPattern.test(filePath)
      }
    } else {
      isValid = pathRegxPattern.test(<string>src)
    }
  }
  return isValid
}

export function validateValues(data: any) {
  let errMsg: string[] = []

  let isSrcValid: boolean = false
  try {
    isSrcValid = validateSrc(data.component, data.inputs.src)
  } catch (error) {
    console.log(`error happend: ${error.message}`)
    isSrcValid = false
  }
  if (!isSrcValid) {
    errMsg.push(`Param path:.inputs.src, param format is incorrect`)
  }

  //TODO: others special value validate

  return { isValid: isSrcValid, errMsg }
}
