export const environment = {
    production: false,
    ws_url: 'https://mob.dinamic.io/api',
    socket_url: 'https://web.dinamic.io',
    img_url: 'https://web.dinamic.io/api/',  
    baseUrl:'https://web.dinamic.io/api',
    userBaseURL:"https://mob.dinamic.io/",
    server_public_key: 'BKZWqaULCsRXobDkQUgDbyAEdqgS6MxjCcC_-xH0RhSACNwIxEVUQqnt8FVT4u11oMJSkpNY-MGoydbErarOUwg',
    socket_options: {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity,
        transports:["websocket"],
        path: '/api/socket.io',
        secure: false,
        rejectUnauthorized: false,
        forceNew: true,
        timeout: 60000
    },   
    payment:true, 
    paymentLink : "https://mob.dinamic.io/api/",
    razorpay_payment_url: "https://api.razorpay.com/v1/checkout/embedded",
    cancel_url:"https://mob.dinamic.io/#/bill/confirm", 
    redirect_url:"https://mob.dinamic.io/",     
    smsType :'production',
    smsUrl:'@mob.dinamic.io'
   
};