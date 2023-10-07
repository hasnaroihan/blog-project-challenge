export const dummyPosts = {
    status: 200,
    data: [
        {
            id: 1,
            user_id: 10,
            title: 'Ada Monyet di Balik Kulkas',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat.',
        },
        {
            id: 2,
            user_id: 10,
            title: 'Ada Kucing di Atas Rumah',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna etiam tempor orci eu lobortis elementum. Feugiat vivamus at augue eget arcu dictum varius. Venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices vitae auctor eu augue ut lectus arcu. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nulla at volutpat diam ut. Nisi quis eleifend quam adipiscing vitae. Nulla pellentesque dignissim enim sit amet venenatis. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Dolor purus non enim praesent elementum facilisis leo vel. Amet consectetur adipiscing elit pellentesque habitant. Velit scelerisque in dictum non consectetur a erat.',
        },
    ],
};

export const dummyUser = {
    status: 200,
    data: {
        user_id: 10,
        name: 'Koki Masak',
        gender: 'female',
        email: 'kokimasak@example.com',
        status: 'active',
    },
};

export const dummyComments = {
    status: 200,
    data: [
        {
            'id': 1,
            'post_id': 1,
            'name': 'Tikus Rumah',
            'email': 'tikusrumah@example.com',
            'body': 'Sit dolor voluptates.',
        },
        {
            'id': 2,
            'post_id': 1,
            'name': 'Monyet Kulkas',
            'email': 'monyetkulkas@example.com',
            'body': 'Dolorum et nesciunt. Dolor tenetur blanditiis. Consequatur velit dolores. Iusto mollitia hic.',
        },
    ],
};

export const dummyUserList = {
    status: 200,
    data: [
        {
            user_id: 10,
            name: 'Koki Masak',
            gender: 'female',
            email: 'kokimasak@example.com',
            status: 'active',
        },
        {
            user_id: 45,
            name: 'Tikus Rumah',
            gender: 'female',
            email: 'tikusrumah@example.com',
            status: 'active',
        },
        {
            user_id: 2,
            name: 'Monyet Kulkas',
            gender: 'male',
            email: 'monyetkulkas@example.com',
            status: 'inactive',
        },
    ],
};
