/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "petqbsrr",
    "name": "mobileApp",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // remove
  collection.schema.removeField("petqbsrr")

  return dao.saveCollection(collection)
})
