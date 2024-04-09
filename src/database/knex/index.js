const knex = require('knex');
const config = require('../../../knexfile');

const connection = knex(config.development);

async function runMigrations() {
  const migrationFiles = [
    require('./migrations/20231026132934_createNotes'),
    require('./migrations/20231027135006_createTags') 
  ];

  try {
    for (const migrationFile of migrationFiles) {
      await migrationFile.up(connection);
      console.log(`Migration ${migrationFile.name} executada com sucesso.`);
    }

    console.log('Todas as migrações foram executadas.');
  } catch (error) {
    console.error('Erro ao executar migrações:', error);
  } 
}

module.exports = runMigrations;




/* const config = require('../../../knexfile')
const knex = require('knex')

const connection = knex(config.development)

module.exports = connection */
