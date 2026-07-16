class ApiError{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }