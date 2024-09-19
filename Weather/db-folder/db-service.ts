import * as SQLite from 'expo-sqlite';


export async function dbStart() {
    const db = await SQLite.openDatabaseAsync('WeatherDB');
    
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS user(
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL);`)
      
      await db.execAsync(`
      CREATE TABLE IF NOT EXISTS favCities(
      city_Id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_Id INTEGER NOT NULL,
      name TEXT NOT NULL,
      FOREIGN KEY (user_Id) REFERENCES user(user_id));`)
       
  }
  
export async function addUsers(username:string,password:string){
    const db = await SQLite.openDatabaseAsync('WeatherDB');
    let add = await db.runAsync('INSERT INTO user (username, password) VALUES (?, ?)', username, password);
    let tempId = getId(username);
    addCityToDB('Seaside', 1);
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

export async function updateUsernameDB(oldUsername: string, newUsername: string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query = await db.getAllAsync('SELECT * FROM user WHERE username = ?', oldUsername);
  if(query.length == 0){
    console.log('User does not exist in database');
    return null;
  }else{
    console.log(`User does exist. Replacing now`);
    const replace = await db.getAllAsync('UPDATE user SET username = ? WHERE username = ?', [newUsername, oldUsername]);
    console.log('Username Replaced. Check debug');
    return true;
  }
}

export async function updatePasswordDB(oldPassword: string, newPassword:string, username:string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query = await db.getAllAsync('SELECT * FROM user WHERE username = ? AND password = ?', [username, oldPassword]);
  if(query.length == 0){
    console.log("Username and old password do not match");
    return null;
  }else{
    const replace = await db.getAllAsync('UPDATE user SET password = ? WHERE username = ? AND password = ?', [newPassword, username, oldPassword]);
    console.log("Password Replaced. Check debug");
    return true;
  }
}

export async function getId(username: string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query = await db.getAllAsync('SELECT user_id FROM user WHERE username = ?', username);
  if(query.length == 0){
    console.log(`No user exists`);
    return null;
  }else{
    console.log(`ID Retreived: ${JSON.stringify(query[0])}`);
    return query[0].user_id;
  }
}

export async function deleteUser(username: string, password: string){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const query = await db.getAllAsync('SELECT * FROM user WHERE username = ? AND password = ?', [username, password]);
  if(query.length == 0){
    console.log("Username and password do not match with the user");
    return null;
  }else{
    console.log("User exists. Deleting now.");
    const deleted = await db.getAllAsync('DELETE FROM user WHERE username = ? AND password = ?', [username, password]); 
    console.log("User Deleted. Check debug");
    return true;
  }
}

export async function addCityToDB(city: string, userId: number){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  const checkDB = await db.runAsync('SELECT name FROM favCities WHERE user_Id=?', userId);
  console.log(checkDB);
  try{
    const query = await db.runAsync('INSERT INTO favCities (user_Id, name) VALUES (?, ?)', [userId, city]);
    console.log(`City: ${city} and ID: ${userId} added!`);
    return query;
  }catch(error){
    console.error(`Error inserting city!: ${error}`);
  }
}


export async function getFavCities(userId: number){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  try{
    const query = await db.getAllAsync('SELECT name FROM favCities WHERE user_Id = ?', userId);
    // console.log(query);
    if(query.length > 0){
      const cities = query.map(row=>row.name);
      return cities;
    }
    // return query[0].name;

    // return query.map(row => row.name);
  }catch(error){
    console.error(`ERROR getting fav cities: ${error}`);
    return [];
  }
}


export async function resetDB(){
  const db = await SQLite.openDatabaseAsync('WeatherDB');
  await db.execAsync(`
    DROP TABLE IF EXISTS user;`)
    await db.execAsync(`
      DROP TABLE IF EXISTS favCities`)
    await dbStart();
    console.log("DB RESET!");
}