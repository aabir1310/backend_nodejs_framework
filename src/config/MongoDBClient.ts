// import {MongoClient} from 'mongodb';
// import * as  path from 'path';
// // import * as requestify from 'requestify';
// // import {SQLProvider} from '../repository/SQLQueries';


// const connectionUrl: string = process.env.MONGODB_URL || 'mongodb://ibm_cloud_39308977_a128_4062_8163_dd8dcec5dbb2:600d512c1ed295e45fc4ed570ffcd9341c9a9504f3b9beed8eaab13278ed0f7d@79b2868d-2a5c-4209-a354-648e858ead91-0.c5kmhkid0ujpmrucb800.databases.appdomain.cloud:32085,79b2868d-2a5c-4209-a354-648e858ead91-1.c5kmhkid0ujpmrucb800.databases.appdomain.cloud:32085,79b2868d-2a5c-4209-a354-648e858ead91-2.c5kmhkid0ujpmrucb800.databases.appdomain.cloud:32085?authSource=admin&replicaSet=replset&tls=true';
// const dbName: string = process.env.MONGODB_NAME || 'forrester_reprint_hub_HelpAndCompilance';


// export class MongoDBClient {
//       private static isMongoConnected = false;
//       private static mongoDb;

//     public static getMongoConnection(result: (mongoConnection) => void) {
//       console.log('Getting Mongo connection...');
        
//       if (this.isMongoConnected) {
//         console.log('Mongo is connected...');
//         return result(this.mongoDb);
//       } else {
//         console.log('Getting New Mongo connection...');
//         this.mongoDb = this.setMongoConnection();
//         this.isMongoConnected = true
//         return result(this.mongoDb);
//       }
//     }

//     static setMongoConnection(){
//       let options = {
//           tlsCAFile: path.join(__dirname,'./mongo-certificate.crt')
//       }
//       let client = new MongoClient(connectionUrl, options);
//       return new Promise((resolve, reject) => {
//         client.connect().then(() => {
//             console.log('Established: Mongo connection');
//             this.mongoDb = client.db(dbName);
//             resolve(this.mongoDb);
//         }).catch(function(err){
//             console.error('Error occurred while connecting to MongoDB:', err);
//             reject(err);
//         });
//       });
//   }
// }