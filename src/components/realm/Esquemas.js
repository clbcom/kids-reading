const Lectura = {
  name: "Lectura",
  properties: {
    _id: "int",
    titulo: "string",
    texto: "string",
    fecha: { type: "date", default: () => new Date() },
  },
  primaryKey: "_id",
};

export { Lectura };
