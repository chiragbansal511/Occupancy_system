const {Client} = require('pg');
const readXlsxFile = require('read-excel-file/node')

// const client = new Client({
//     host : "localhost",
//     user : 'postgres',
//     post : 12345,
//     password : "12345",
//     database : 'test'
// })

// try {
//     client.connect();
//     console.log("Connected");

//     try {
//        client.query(`CREATE TABLE testing (name VARCHAR(125) , rollno INT)` , (err , res)=>{
//         console.log("errcreate" , err);
//         console.log("rescreate" , res);
//        }); 

//        client.query(`INSERT INTO testing (name , rollno) VALUES ('chirag' , 1) , ('saaransh' , 2) , ('vivek' , 3)` , (err , res)=>{
//         console.log("errinsert" , err);
//         console.log("resinsert" , res);
//        });

//        client.query(`SELECT * FROM testing` , (err , res)=>{
//         console.log("errfetched" , err);
//         console.log("resfetched" , res);
//         client.end();
//        });

//     } catch (error) {
//         console.log("error handling database" , error);
//     }
// } catch (error) {
//     console.log("Connection error" , error);
// }

try {
    readXlsxFile('D:\\Web Development\\Book1.xlsx').then((rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        console.log(rows , "rows");
      })
} catch (error) {
    console.log("error" , error);
}