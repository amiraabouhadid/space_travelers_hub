import { render, screen } from '@testing-library/react';

import Missions from './components/Missions';

describe('Missions page component', () => {
  test('renders missions fetched ', () => {
    const missions = [{ id: '123', name: 'testMission', description: 'a dummy mission created for testing purposes' }];
    render(<Missions missions={missions} />);
    const tableHeader = screen.getByText(/mission/i);
    expect(tableHeader).toBeInTheDocument();
  });
});
