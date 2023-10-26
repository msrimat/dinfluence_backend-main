export const schemaTypes = [
  {
    name: 'category',
    type: 'document',
    title: 'Categories',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title',
      },
      {
        name: 'icon',
        type: 'image',
        title: 'Image',
      },
    ],
  },
  {
    name: 'creators',
    type: 'document',
    title: 'Creators',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'media',
        type: 'string',
        title: 'Media',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link',
      },
    ],
  },
  {
    name: 'experiences',
    type: 'document',
    title: 'Experiences',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link',
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date',
      },
      {
        name: 'schedule',
        type: 'array',
        title: 'Available Schedules',
        of: [
          {
            name: 'time',
            type: 'string',
            title: 'Time',
          },
        ],
      },
      {
        name: 'totalReviews',
        type: 'number',
        title: 'Total Reviews',
      },
    ],
  },
  {
    name: 'reviews',
    type: 'document',
    title: 'Reviews',
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
      },
      {
        name: 'comment',
        type: 'string',
        title: 'Comment',
      },
    ],
  },
]
