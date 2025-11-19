export default {
  name: 'navItem',
  title: 'Item de Navegação',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'anchor',
      title: 'Âncora',
      type: 'string',
      description: 'Para links internos na mesma página (ex: #contato)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
}
