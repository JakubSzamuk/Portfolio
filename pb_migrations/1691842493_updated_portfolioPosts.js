/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "equgcyok",
    "name": "githubLink",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8m2ty23lsqd91v")

  // remove
  collection.schema.removeField("equgcyok")

  return dao.saveCollection(collection)
})
