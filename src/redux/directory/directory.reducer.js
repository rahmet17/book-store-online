const INITIAL_STATE = {
  sections: [
    {
      title: 'Компьютерная литература',
      imageUrl: 'https://image.freepik.com/free-vector/_7243-336.jpg',
      id: '26ptgqrnEth5TEK12uhP',
      linkUrl: 'store/computer'
    },
    {
      title: 'Научная литература',
      imageUrl: 'https://media.istockphoto.com/vectors/flat-line-art-design-of-science-concept-vector-id519038748',
      id: 'Gh431MymfKVZNr0sRM0Z',
      linkUrl: 'store/science'
    },
    {
      title: 'Художественная литература',
      imageUrl: 'https://resh.edu.ru/uploads/lesson_extract/2017-09-05_m-3-11750/3076/616/OEBPS/objects/b1_9_litr_01_01/images/file_1.jpg',
      id: 'IccXkPj1S8BkE7CRaIWh',
      linkUrl: 'store/literature'
    },
    {
      title: 'Детская литература',
      imageUrl: 'https://previews.123rf.com/images/helenfield/helenfield1712/helenfield171200598/91266476-preschool-school-education-with-children-doodle-pattern-kids-play-and-study-boys-and-girls-kids-draw.jpg',
      id: 'YKGsPrgAaPEhvQHHEM3T',
      linkUrl: 'store/kids'
    },
    {
      title: 'Спорт и туризм',
      imageUrl: 'https://media.istockphoto.com/vectors/hand-drawn-doodle-sport-background-vector-id480877158',
      id: 'PjU0QF1rcIMvcnZvnyDC',
      linkUrl: 'store/sport'
    },
    {
      title: 'Автотранспорт',
      imageUrl: 'https://st2.depositphotos.com/3244893/5208/v/600/depositphotos_52088703-stock-illustration-doodle-colored-cars-set.jpg',
      id: 'PjBvQSdrCNoXbEhXGGtB',
      linkUrl: 'store/auto'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
