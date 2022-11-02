import nodemailer from "nodemailer"
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'alokgupta70007@gmail.com',
        pass:'gxoiqpadnezzlvzd'
    }
});

var mailOptions={
    from:"alokgupta70007@gmail.com",
    to:"alokgupta194@gmail.com",
    subject:"email",
    text:"hello from web",
};

let sendEmail=()=>{
    transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("failed ",err);
        }else{
            console.log("sucess",info.response);
        }
    })
}

export default sendEmail;