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

export async function resetDB(){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  await db.execAsync(`
    DROP TABLE IF EXISTS user;`)
    await dbStart();
    console.log("DB RESET!");
}