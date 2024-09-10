import * as SQLite from 'expo-sqlite';


export async function dbStart() {
    const db = await SQLite.openDatabaseAsync('WeatherDB');
    
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS user(
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL);`)
      
  }
  
export async function addUsers(username:string,password:string){
    const db = await SQLite.openDatabaseAsync('WeatherDB');
    let add = await db.runAsync('INSERT INTO user (username, password) VALUES (?, ?)', username, password);
    return add;
}

export async function checkCredentials(username: string, password: string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query =  await db.getAllAsync('SELECT * FROM user WHERE username = ? AND password=?', [username, password]); 
  if(query.length != 0){
    return query[0];
  }else{
    return null;
  }
}

export async function checkIfUserExists(username: string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query = await db.getAllAsync('SELECT * FROM user WHERE username = ?', username);
  if(query.length == 0){
    console.log(`CHECK: ${query[0]}`)
    return null;
  }else{
    console.log(`CHECK: ${query[0]}`)
    return query[0];
  }
}

export async function resetDB(){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  await db.execAsync(`
    DROP TABLE IF EXISTS user;`)
    await dbStart();
    console.log("DB RESET!");
}