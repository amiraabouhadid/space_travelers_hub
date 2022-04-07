import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missions from './redux/missions/missions';
import rockets from './redux/rockets/rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import App from './App';

const rootReducer = combineReducers({
  missions,
  rockets,
});

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

describe('Header component', () => {
  test('home page link', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const homeLink = screen.getByText(/\b(Space Traveler's Hub)\b/i);
    userEvent.click(homeLink);
    expect(screen.getByText(/rockets/i)).toBeInTheDocument();
  });
  test('rockets link', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const rocketsLink = screen.getByText(/\b(rockets)\b/i);
    userEvent.click(rocketsLink);
    expect(screen.getByText(/rockets/i)).toBeInTheDocument();
  });
  test('missions link', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const missionsLink = screen.getByText(/\b(missions)\b/i);
    userEvent.click(missionsLink);
    expect(screen.getByText(/missions/i)).toBeInTheDocument();
  });
  test('profile link', () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>,
    );
    const profileLink = screen.getByText(/\b(my profile)\b/i);
    userEvent.click(profileLink);
    expect(screen.getAllByText(/\b(my missions)\b|\b(my rockets)\b/i)).toHaveLength(2);
  });
});

describe('Profile page component', () => {
  test('renders correctly', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];
    const rockets = [{
      id: '1329', name: 'myStar', description: 'second dummy text', image: 'cool pic',
    }];
    const profilePage = renderer.create(
      <Provider store={Store}>
        <Profile missions={missions} rockets={rockets} />
      </Provider>,
    ).toJSON();
    expect(profilePage).toMatchSnapshot();
  });
  test('renders profile headers', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];
    const rockets = [{
      id: '1329', name: 'myStar', description: 'second dummy text', image: 'cool pic',
    }];
    render(
      <Provider store={Store}>
        <Profile missions={missions} rockets={rockets} />
      </Provider>,
    );
    const profilePageHeaders = screen.getAllByText(/\b(my missions)\b|\b(my rockets)\b/i);
    expect(profilePageHeaders).toHaveLength(2);
  });
  test('adds joined missions to profile when join mission button is clicked ', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];
    const rockets = [{
      id: '1329', name: 'myStar', description: 'second dummy text', image: 'cool pic',
    }];
    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionJoinButton = screen.getByText(/\bjoin mission\b/i);
    userEvent.click(missionJoinButton);
    const profilePageAfterJoinMission = renderer.create(
      <Provider store={Store}>
        <Profile missions={missions} rockets={rockets} />
      </Provider>,
    ).toJSON();
    expect(profilePageAfterJoinMission).toMatchSnapshot();
  });
});

describe('Missions page component', () => {
  test('renders correctly', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    const missionsPage = renderer.create(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    ).toJSON();
    expect(missionsPage).toMatchSnapshot();
  });
  test('renders  missions table header ', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionsTableHeader = screen.getAllByText(/\b(^mission)\b|\b(description)\b|\b(status)\b/i);
    expect(missionsTableHeader).toHaveLength(3);
  });
  test('renders  mission  name', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionName = screen.getAllByText(/\bfalcon\b/i);
    expect(missionName).toHaveLength(1);
  });
  test('renders  mission  description ', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionDescription = screen.getAllByText(/\ba dummy text created for testing purposes\b/i);
    expect(missionDescription).toHaveLength(1);
  });
  test('renders  mission  status badge before joining mission', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionBadge = screen.getAllByText(/\bnot a member\b/i);
    expect(missionBadge).toHaveLength(1);
  });
  test('renders  join mission button before joining mission', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionButton = screen.getAllByText(/\bjoin mission\b/i);
    expect(missionButton).toHaveLength(1);
  });

  test('changes status badge and join button when mission is joined ', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const joinButton = screen.getByText(/\bjoin mission\b/i);
    userEvent.click(joinButton);
    const missionsPageAfterJoinMission = renderer.create(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    ).toJSON();
    expect(missionsPageAfterJoinMission).toMatchSnapshot();
  });
});

describe('Rockets page component', () => {
  test('renders correctly', () => {
    const rockets = [{ id: '1', name: 'Falcon Heavy', description: 'a dummy text created for testing purposes' }];

    const rocketsPage = renderer.create(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    ).toJSON();
    expect(rocketsPage).toMatchSnapshot();
  });
  test('renders  rocket  name', () => {
    const rockets = [{ id: '1', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    );
    const rocketName = screen.getAllByText(/\bFalcon\b/i);
    expect(rocketName).toHaveLength(1);
  });
  test('renders  rocket  description ', () => {
    const rockets = [{ id: '1', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    );
    const rocketDescription = screen.getAllByText(/\ba dummy text created for testing purposes\b/i);
    expect(rocketDescription).toHaveLength(1);
  });
  test('renders reservation button before reserving the rocket', () => {
    const rockets = [{ id: '1', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    );
    const reservationButton = screen.getByText(/\bReserve Rocket\b/i);
    expect(reservationButton.textContent).toMatch(/Reserve Rocket/i);
  });
  test('add reserved badge and cancel reservation button when the rocket is booked', () => {
    const rockets = [{ id: '1', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    );
    const reservationButton = screen.getByText(/\bReserve Rocket\b/i);
    userEvent.click(reservationButton);
    const rocketsPageAfter = renderer.create(
      <Provider store={Store}>
        <Rockets rockets={rockets} />
      </Provider>,
    ).toJSON();
    expect(rocketsPageAfter).toMatchSnapshot();
  });
});
