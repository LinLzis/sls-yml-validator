export enum Protocol {
  http = "http",
  https = "https",
}

export enum Region {
  "ap-guangzhou" = "ap-guangzhou",
  "ap-shanghai" = "ap-shanghai",
  "ap-hongkong" = "ap-hongkong",
  "ap-beijing" = "ap-beijing",
  "ap-mumbai" = "ap-mumbai",
  "ap-chengdu" = "ap-chengdu",
  "ap-singapore" = "ap-singapore",
  "na-siliconvalley" = "na-siliconvalley",
  "na-toronto" = "na-toronto",
  "ap-shanghai-fsi" = "ap-shanghai-fsi",
  "ap-shenzhen-fsi" = "ap-shenzhen-fsi",
  "ap-tokyo" = "ap-tokyo",
}

export enum HttpMethod {
  "GET" = "GET",
  "POST" = "POST",
  "PUT" = "PUT",
  "DELETE" = "DELETE",
  "HEAD" = "HEAD",
}

export enum Environment {
  release = "release",
  test = "test",
  prepub = "prepub",
}

// 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，Nodejs8.9，Nodejs10.15，Nodejs12.16， PHP5， PHP7，Golang1 和 Java8，默认Python2.7
export enum NodeRuntime {
  "Nodejs6.10" = "Nodejs6.10",
  "Nodejs8.9" = "Nodejs8.9",
  "Nodejs10.15" = "Nodejs10.15",
  "Nodejs12.16" = "Nodejs12.16",
}

export enum PhpRuntime {
  "PHP5" = "PHP5",
  "PHP7" = "PHP7",
}

export enum PythonRuntime {
  "Python2.7" = "Python2.7",
  "Python3.6" = "Python3.6",
}
