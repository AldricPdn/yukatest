export default {
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    { name: "name", title: "Nom du produit", type: "string" },
    { name: "brand", title: "Marque", type: "string" },
    { name: "image", title: "Image principale", type: "image" },
    { name: "description", title: "Description courte", type: "text" },
    { name: "ingredients", title: "Ingrédients", type: "array", of: [{ type: "string" }] },
    { name: "category", title: "Catégorie", type: "string" },
    {
      name: "scores",
      title: "Scores",
      type: "object",
      fields: [
        { name: "nutriscore", title: "NutriScore", type: "string" },
        { name: "ecoscore", title: "EcoScore", type: "string" }
      ]
    },
    { name: "effects", title: "Effets / recommandations", type: "text" },
    { name: "price", title: "Prix indicatif", type: "number" },
    { name: "purchaseLink", title: "Lien achat", type: "url" },
    { name: "labels", title: "Labels / certifications", type: "array", of: [{ type: "string" }] }
  ]
};
