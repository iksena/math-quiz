const response = {
  status: 200,
  questions: [
    {
      content: 'Given this formula \n$$\ns = ut^{2} + \\frac{1}{2}at^{2}\n$$\n \n\n![alt text](https://www.physicsclassroom.com/PhysicsClassroom/media/Concept-Builders/Acceleration/images/Q49.png)\n\n Make "$a$" the subject of the formula',
      answers: [
        {
          content: '$a = \\frac{s}{ut} - \\frac{1}{2}t^{2}$',
          option: 'A'
        },
        {
          content: '4/9',
          option: 'B'
        },
        {
          content: '20/21',
          option: 'C'
        },
        {
          content: '18/25',
          option: 'D'
        }
      ]
    }
  ]
};

export default { question: response.questions[0] };
