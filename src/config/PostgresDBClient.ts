// import * as promise from 'bluebird';
// import * as pgPromise from 'pg-promise';
// //import * as requestify from 'requestify';
// //import {SQLProvider} from '../repository/SQLQueries';
// import * as path from 'path';
// import {ConnectionString} from 'connection-string';

// interface IExtensions {

// }

// export class PostgresDBClient {
//   private static isPostgresConnected: boolean = false;
//   private static db: pgPromise.IDatabase<IExtensions> & IExtensions;;

//    //Create connection with postgresql
//   public static getPostgresConnection(result: (db) => void) {
    
//     if(!this.isPostgresConnected) {
//         const options = {
//           promiseLib : promise
//         }

        
//         const postgesqlURL: string = process.env.POSTGRESQL_URL || 'postgresql://postgres:12345@localhost:5432/postgres'
//         const cs = new ConnectionString(postgesqlURL);
     
      
//         const pgp : pgPromise.IMain = pgPromise<IExtensions>(options)//add promise in  connection
    
//         this.db =pgp(cs.toString())
//        // console.log("coming here----------->>",this.db)
//         this.isPostgresConnected = true;
//        // console.log("coming here----------->>",this.isPostgresConnected)
//         console.log("connected------>>")
        
//         return result(this.db);
//     } else {
//         return result(this.db);
//     }
//   }
// }
