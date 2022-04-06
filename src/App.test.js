import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import Missions from './components/Missions';
import Profile from './components/Profile';

import App from './App';

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
});

describe('Missions page component', () => {
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
    const missionDescription = screen.getAllByText(/\bnot a member\b/i);
    expect(missionDescription).toHaveLength(1);
  });
  test('renders mission join mission button before joining mission', () => {
    const missions = [{ id: '123', name: 'Falcon', description: 'a dummy text created for testing purposes' }];

    render(
      <Provider store={Store}>
        <Missions missions={missions} />
      </Provider>,
    );
    const missionDescription = screen.getAllByText(/\bjoin mission\b/i);
    expect(missionDescription).toHaveLength(1);
  });
});
