export const authUser = (permissions)=> {
    return (req, res, next) =>{
     if (permissions.includes(userRole)){
            next();
        }
        else{
            return res.status(401).json("Access Denied")
        }
}
};