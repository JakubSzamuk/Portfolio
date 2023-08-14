/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // remove
  collection.schema.removeField("wg4jlh77")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jbhwufeu",
    "name": "date",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wg4jlh77",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("jbhwufeu")

  return dao.saveCollection(collection)
})
