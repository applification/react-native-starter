import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../src/actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const suppliers = {
  results: [
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'mason',
        last: 'walker'
      },
      location: {
        street: '9366 bairds road',
        city: 'upper hutt',
        state: 'west coast',
        postcode: 49293
      },
      email: 'mason.walker@example.com',
      login: {
        username: 'whitemouse414',
        password: 'lowell',
        salt: 'I1x0ZEtp',
        md5: '6167a2c479522db9f7befcc832e7ace8',
        sha1: '94e8cc37ceaaba2450cb97fe3e1f52d3b1ea5ab2',
        sha256: 'dbbebda09b08fb5d79073c637a799066c3f0b9dd7c09ac59f6189483fd6b6214'
      },
      dob: '1974-09-20 09:28:59',
      registered: '2007-02-24 02:51:20',
      phone: '(907)-186-0638',
      cell: '(737)-135-2392',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/84.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg'
      },
      nat: 'NZ'
    },
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'michael',
        last: 'schäfer'
      },
      location: {
        street: '2028 rosenweg',
        city: 'barnim',
        state: 'hamburg',
        postcode: 37287
      },
      email: 'michael.schäfer@example.com',
      login: {
        username: 'ticklishpeacock507',
        password: 'iverson',
        salt: 'zymS0vqz',
        md5: '5eb423d19a17a60cc66b47ae32687622',
        sha1: '249202fb021424027c21118d6d6a630b8e88fbbe',
        sha256: 'db2cffb9d1703072d656d4b50e26e15561aa26e9044f4ea399abe6927f771987'
      },
      dob: '1986-01-16 08:45:01',
      registered: '2005-10-25 14:03:49',
      phone: '0996-0349818',
      cell: '0174-2830682',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/7.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/7.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
      },
      nat: 'DE'
    },
    {
      gender: 'female',
      name: {
        title: 'miss',
        first: 'vicenta',
        last: 'bravo'
      },
      location: {
        street: '5402 avenida de salamanca',
        city: 'madrid',
        state: 'extremadura',
        postcode: 25547
      },
      email: 'vicenta.bravo@example.com',
      login: {
        username: 'whiteswan822',
        password: 'meredith',
        salt: 'Q3Fkc1T6',
        md5: 'e36b5e287bcf046c07af74062056c11c',
        sha1: '00f9d50026699a2c5f41e12aa5ee8388002f6fa5',
        sha256: '26514be60c509221e04505e93ce6c659c1a1ba14173f4ef146f92645dde3cd70'
      },
      dob: '1949-10-28 06:33:11',
      registered: '2004-10-28 03:49:49',
      phone: '961-171-169',
      cell: '636-312-719',
      id: {
        name: 'DNI',
        value: '31233557-S'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/60.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/60.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/60.jpg'
      },
      nat: 'ES'
    },
    {
      gender: 'female',
      name: {
        title: 'ms',
        first: 'firmina',
        last: 'das neves'
      },
      location: {
        street: '9067 rua sete de setembro ',
        city: 'cotia',
        state: 'pará',
        postcode: 10784
      },
      email: 'firmina.dasneves@example.com',
      login: {
        username: 'lazygorilla554',
        password: 'girsl',
        salt: 'I6TsmPGY',
        md5: '5e93cbe3ff24acb42e0fd61994990b65',
        sha1: 'b3d8472a8c8eedc7b2cdc0903a3229613031e30f',
        sha256: '9866b4655192f1486061ddbc59d8c666f977bb3f8618311ab15c095396e5c027'
      },
      dob: '1982-09-01 23:28:16',
      registered: '2012-08-19 00:56:06',
      phone: '(82) 4806-1818',
      cell: '(42) 6492-0196',
      id: {
        name: '',
        value: null
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/82.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/82.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/82.jpg'
      },
      nat: 'BR'
    },
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'manuel',
        last: 'roman'
      },
      location: {
        street: '4303 calle nebrija',
        city: 'ferrol',
        state: 'castilla y león',
        postcode: 84546
      },
      email: 'manuel.roman@example.com',
      login: {
        username: 'tinymouse304',
        password: 'blue99',
        salt: 'umSFV3Xr',
        md5: '1211a1525a96147c7bd5522cfceeac96',
        sha1: 'a35ee5472e8fa8c74a1b315a245a9f8b9859355e',
        sha256: '1e01e39ab970a95435f65fc5f3ab061c28468f9f073e4363d46f54f75df4910a'
      },
      dob: '1971-04-05 08:52:57',
      registered: '2015-07-21 08:19:51',
      phone: '991-640-367',
      cell: '661-745-854',
      id: {
        name: 'DNI',
        value: '74519788-C'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/30.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/30.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/30.jpg'
      },
      nat: 'ES'
    }
  ],
  info: {
    seed: 'threeamigos',
    results: 5,
    page: 1,
    version: '1.1'
  }
};

describe('SUPPLIER ACTIONS', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates a FETCH_SUPPLIERS_REQUEST action', () => {
    expect(actions.fetchSuppliersRequest()).toMatchSnapshot();
  });

  it('creates a FETCH_SUPPLIERS_FAILURE action', () => {
    const error = 'Could not get suppliers';
    expect(actions.fetchSuppliersFailure(error)).toMatchSnapshot();
  });

  it('creates a FETCH_SUPPLIERS_SUCCESS action', () => {
    nock('https://randomuser.me')
      .get('/api/?seed=threeamigos&results=50')
      .reply(200, suppliers);

    const store = mockStore({ suppliers });

    return store.dispatch(actions.fetchSuppliers()).then(() => {
      const actionList = store.getActions();
      expect(actionList[1].payload).toMatchSnapshot();
    });
  });
});
