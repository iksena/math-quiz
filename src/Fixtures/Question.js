const response = {
  status: 200,
  questions: [
    {
      content: 'Given a **formula** below\n$$\ns = ut + \\frac{1}{2}at^{2}\n$$\nCalculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$',
      answers: [
        {
          content: '$9 m$',
          option: 'A'
        },
        {
          content: '$10 m$',
          option: 'B'
        },
        {
          content: '$11 m$',
          option: 'C'
        },
        {
          content: '$12 m$',
          option: 'D'
        }
      ]
    }
  ]
};

export default { question: response.questions[0] };
