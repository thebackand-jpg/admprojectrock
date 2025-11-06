export default {
  name: 'formField',
  title: 'Campo de Formulário',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label do Campo',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Tipo do Campo',
      type: 'string',
      options: {
        list: [
          { title: 'Texto', value: 'text' },
          { title: 'E-mail', value: 'email' },
          { title: 'Telefone', value: 'tel' },
          { title: 'Textarea', value: 'textarea' },
          { title: 'Seleção', value: 'select' },
          { title: 'Checkbox', value: 'checkbox' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'required',
      title: 'Campo Obrigatório',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'options',
      title: 'Opções (para campos de seleção)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Adicione uma opção por linha (apenas para campos de tipo "select")',
},
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'type',
    },
  },
}
