const nodemailer=require('nodemailer');
var transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'alokgupta70007@gmail.com',
        pass:'1122@@aaAS'
    }
});

var mailOptions={
    from:"alokgupta10007@gmail.com",
    to:"alokgupta194@gmail.com",
    subject:"email",
    text:"hello from web",
};

transport.sendMail(mailOptions,(err)=>{
    if(err){
        console.log("failed ",err);
    }else{
        console.log("sucess");
    }
})