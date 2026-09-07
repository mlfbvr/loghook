import type { Catch } from '@/data/schema';
import { Repository } from './repository';
import mysql from 'mysql2/promise';

class MySQLRepository implements Repository<Catch> {
  private dbConnection: mysql.Pool;

  constructor() {
    this.dbConnection = mysql.createPool({
      host: '',
      user: '',
      password: '',
      database: '',
    });
  }

  async getAll(): Promise<Catch[]> {
    try {
      const [rows] = await this.dbConnection.query('SELECT * FROM catches');
      return rows as Catch[];
    } catch (error) {
      console.error('Error reading data from database:', error);
      return [];
    }
  }

  async saveOne(item: Catch): Promise<void> {
    const {
      species,
      weight,
      length,
      caughtBy,
      dateCaught,
      location,
      released,
    } = item;
    const connection = await this.dbConnection.getConnection();
    try {
      await connection.query(
        'INSERT INTO catches (species, weight, length, caughtBy, dateCaught, location, released) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [species, weight, length, caughtBy, dateCaught, location, released]
      );
    } catch (error) {
      console.error('Error saving data to database:', error);
    } finally {
      connection.release();
    }
  }

  async getOne(id: string): Promise<Catch | null> {
    const connection = await this.dbConnection.getConnection();
    try {
      const [rows] = await connection.query(
        'SELECT * FROM catches WHERE id = ?',
        [id]
      );
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0] as Catch;
      }
      return null;
    } catch (error) {
      console.error('Error reading data from database:', error);
      return null;
    } finally {
      connection.release();
    }
  }
}

export default MySQLRepository;
