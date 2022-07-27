export function passwordValidation(pass){
    if(pass.length<4){
        return {
            massage:"password too short",
            result:false,
        }
    }
    return {
        massage:"success",
        result:true,
    };
}