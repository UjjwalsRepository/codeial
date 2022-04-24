module.exports.profile=(req,res)=>{
    return res.send('<h1>User Profile</h1>')
}
//Rendering SignUp Page
module.exports.signUp=(res,req)=>{
    return res.render('user_sign_up',{
        title:"Codial | Sign Up"
    })
}
//Rendering SigInp Page
module.exports.signIn=(res,req)=>{
    return res.render('user_sign_in',{
        title:"Codial | Sign In"
    })
}