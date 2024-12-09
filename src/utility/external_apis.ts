// import axios from 'axios';
// import { globalException } from '../exception/global_Exception';
// const API_KEY='5Q67JmXFDfpZtOPs1e2NUjnCgEVRvSAikcodwyI934lzHKMhGqJts5ndxPYjm1OBMVRg6uX9FSfclNvo';

// export async function sendOtp(mobileNumber){
//     const otpStore={};
//     const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
//    try{
// const otp=generateOtp();

// otpStore[mobileNumber] = {
//     otp,
//     expiresAt: Date.now() + 5 * 60 * 1000,
//   };
//   const response = await axios.post(
//     'https://www.fast2sms.com/dev/bulkV2',
//     {
//       route: 'q', // Transactional route
//       message: `Your OTP is: ${otp}`,
//       language: 'english',
//       flash: 0,
//       numbers: mobileNumber,
//     },
//     {
//       headers: {
//         authorization: API_KEY,
//       },
//     }
//   );

//   if (response.data.return) {
//     return 'OTP sent successfully!' 
//   } else {
//     return  'Failed to send OTP.' ;
//   }

//    }catch(error){
//    console.log(error)
//    globalException.sendErrorResponse(error)
//  }

// }
import twilio from 'twilio';
import dotenv from 'dotenv';
import { globalException } from '../exception/global_Exception';

// Load environment variables from .env file
dotenv.config();
export async function sendOtp(mobileNumber){
    const otp = Math.floor(100000 + Math.random() * 900000);
    const accountSid = process.env.ACCOUNT_SID
    const authToken = process.env.AUTH_TOKEN
    const messagingServiceSid = process.env.MESSAGING_SERVICE_SID;
   console.log("hihihih",accountSid,authToken,messagingServiceSid,otp,mobileNumber)
    const client=twilio(accountSid,authToken);
    
    try{
        console.log("iam here ")
        const message=await client.messages.create({
            body: `Your OTP is: ${otp}`,
            //messagingServiceSid,
            to: `+91${mobileNumber}`,
            from:'+17756307074'
        });
       console.log(message,"______________")
        console.log(`OTP sent successfully to ${mobileNumber}. Message SID: ${message.sid}`);
        return message.sid;

    }catch(error){
        console.log("Otp Error ", error,mobileNumber)
        globalException.sendErrorResponse(error);
    }

}
