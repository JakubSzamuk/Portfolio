/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5hj3ysbj0o8ty")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zuotu1qz",
    "name": "key",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bs5hj3ysbj0o8ty")

  // remove
  collection.schema.removeField("zuotu1qz")

  return dao.saveCollection(collection)
})
