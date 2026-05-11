import app from './server.ts'


// invoke listen method on app
app.listen(3000,()=>{
    // This the callback when server is on
    console.log("Server Started");
})