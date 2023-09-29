import Realm from "realm";

class Lecturas extends Realm.Object {
  static schema = {
    name: "Lecturas",
    properties: {
      _id: { type: "uuid", default: () => new Realm.BSON.UUID() },
      titulo: "string",
      lectura: "string",
      fecha: { type: "date", default: () => new Date() },
    },
    primaryKey: "_id",
  };
}

export { Lecturas };
