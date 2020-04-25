const response = {
  status: 'success',
  data: {
    fetchedQuestion: {
      id: 13,
      content: 'Given this formula $$s = ut^{2} + \\frac{1}{2}at^{2}$$\nMake "$a$" the subject of the formula',
      answers: [
        {
          id: 26,
          content: '$a = \\frac{s}{ut} - \\frac{1}{2}t^{2}$',
          answer_option: {
            id: 1,
            name: 'A',
          },
        },
        {
          id: 27,
          content: '4/9',
          answer_option: {
            id: 2,
            name: 'B',
          },
        },
        {
          id: 28,
          content: '20/21',
          answer_option: {
            id: 3,
            name: 'C',
          },
        },
        {
          id: 29,
          content: '18/25',
          answer_option: {
            id: 4,
            name: 'D',
          },
        },
      ],
    },
  },
};

export default { question: response.data.fetchedQuestion };
