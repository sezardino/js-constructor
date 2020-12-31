const model = [
  {
    type: 'title',
    value: 'JavaScript constructor',
    options: {
      tag: 'h2',
      styles: {
        background:
          'linear-gradient(90deg, #ffffff 0%, #ff1b00 50%, #ffffff 100%)',
        color: '#001061',
        padding: '1.5rem',
        'text-align': 'center',
      },
    },
  },
  {
    type: 'text',
    value:
      'JavaScript Constructor created on pure JavaScript, without any frameworks and libraries',
    options: {
      styles: {
        'text-align': 'center',
        padding: '1.5rem',
        'font-size': '18px',
      },
    },
  },
  {
    type: 'columns',
    value: ['Content', 'for', 'columns'],
    options: {
      styles: {
        'text-align': 'center',
        padding: '1.5rem',
      },
    },
  },
  {
    type: 'image',
    value:
      'https://img5.goodfon.ru/wallpaper/nbig/8/9c/abstraktsiia-fon-kartinka-sinii-goluboi-smeshenie-tsvetov-kr.jpg',
    options: {
      styles: {
        width: '100%',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      },
      imageStyles: {
        width: '75%',
      },
      alt: 'alternative text',
    },
  },
];

export default model;
