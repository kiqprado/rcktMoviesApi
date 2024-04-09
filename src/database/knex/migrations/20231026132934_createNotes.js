exports.up = async knex => {
  const hasNotesTable = await knex.schema.hasTable('notes')

  if (!hasNotesTable) {
    knex.schema.createTable('notes', table => {
      table.increments('id')
      table.text('title')
      table.text('description')
      table.integer('rate')
      table.integer('user_id').references('id').inTable('users')

      table.timestamp('created_at').default(knex.fn.now())
      table.timestamp('updated_at').default(knex.fn.now())
    })
  }
}

exports.down = knex => knex.schema.dropTable('notes')
