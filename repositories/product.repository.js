const MongoDB = require("../db/mongo");
const db = new MongoDB("product");

module.exports = {
  find() {
    return db.find();
  },

  retrieve(id) {
    return db.findById(id);
  },

  create(data) {
    return db.create(data);
  },

  put(id, data) {
    return db.put(id, data);
  },

  delete(id) {
    return db.delete(id);
  },
};