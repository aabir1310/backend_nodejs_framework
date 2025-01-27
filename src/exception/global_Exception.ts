
export class globalException {

    public static handleError(error,originalUrl){
        console.log(error);
        let options = {
            apiname : originalUrl.substring(10),
            transactiontype : 'ERROR',
            reason : error.stack,
            additionaldata : {}
        }
        if(error.hasOwnProperty('code')){
            options.additionaldata['code'] = error.code;
        }
        if(error.hasOwnProperty('detail')){
            options.additionaldata['detail'] = error.detail;
        }
        if(error.hasOwnProperty('message')){
            options.additionaldata['message'] = error.message;
        }
        return {
          status : false,
          message : "Something broken"
        };
    }
    public static sendErrorResponse(err) {
        return {
            status: 'false',
            code: 500,
            message: err.message
        }
    }
}
