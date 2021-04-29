class PageRequest {
   code: number
   request: string // TODO Docs, should be stringified JSON

   constructor(code: number, request: string) {
	   this.code = code;
	   this.request = request
   }
}

export default PageRequest;
