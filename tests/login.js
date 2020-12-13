const test = require('blue-tape')
const r = require('rethinkdb')
const testUtils = require('rethink-event-sourcing/tape-test-utils.js')
const crypto = require('crypto')

test('Facebook register, login, disconnect', t => {

  t.plan(2)

  let conn
  testUtils.connectToDatabase(t, r, (connection) => conn = connection)

  /// TODO: mock FB somehow ?!

  t.test('close connection', t => {
    conn.close(() => {
      t.pass('closed')
      t.end()
    })
  })

})