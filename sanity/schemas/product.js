// schemas/product.js

export default {
  name: 'product',
  title: 'Produit',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du produit',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'brand',
      title: 'Marque',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Nettoyant', value: 'nettoyant' },
          { title: 'Crème hydratante', value: 'creme' },
          { title: 'Sérum', value: 'serum' },
          { title: 'Protection solaire', value: 'spf' },
          { title: 'Shampoing', value: 'shampoing' },
          { title: 'Autre', value: 'autre' },
        ],
      },
    },
    {
      name: 'typeDePeau',
      title: 'Type de peau recommandé',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Peau grasse',
          'Peau sèche',
          'Peau mixte',
          'Peau sensible',
          'Peau acnéique',
        ],
      },
    },
    {
      name: 'description',
      title: 'Description du produit',
      type: 'text',
    },
    {
      name: 'prix',
      title: 'Prix estimé (€)',
      type: 'number',
    },
    {
      name: 'composition',
      title: 'Liste INCI (brute)',
      type: 'text',
    },
    {
      name: 'ingredientsUtiles',
      title: 'Ingrédients utiles',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'ingredientsControverses',
      title: 'Ingrédients controversés',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'noteIA',
      title: 'Note globale IA',
      type: 'number',
      description: 'Score généré par IA (0 à 10)',
    },
    {
      name: 'avisIA',
      title: 'Résumé IA',
      type: 'text',
      description: 'Avis automatique généré via OpenAI',
    },
    {
      name: 'lienAchat',
      title: 'Lien d\'achat ou de référence',
      type: 'url',
    },
    {
      name: 'disponible',
      title: 'Produit disponible ?',
      type: 'boolean',
      initialValue: true,
    },
  ],
}
