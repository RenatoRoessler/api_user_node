import { Pool } from 'pg'
const connectionString = 'postgres://efdkpspg:vfXBGmS7vhK6RkpSNs3jkL4sqnhNo6OV@fanny.db.elephantsql.com/efdkpspg'

const db = new Pool({ connectionString })

export default db;