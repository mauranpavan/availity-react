import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import { avUserApi } from '@availity/api-axios';
import { useCurrentUser } from '..';

jest.mock('@availity/api-axios');

afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const Component = () => {
  const [user, loading, error] = useCurrentUser();

  return loading ? (
    <span data-testid="loading" />
  ) : (
    JSON.stringify(user || error)
  );
};

describe('useCurrentUser', () => {
  test('should return loading', () => {
    avUserApi.me.mockResolvedValueOnce({
      id: 'aka12345',
      userId: 'testExample',
      akaname: 'aka12345',
      lastName: 'Last',
      firstName: 'First',
    });

    const { getByTestId } = render(<Component />);

    getByTestId('loading');
  });

  test('should return user', async () => {
    avUserApi.me.mockResolvedValueOnce({
      id: 'aka12345',
      userId: 'testExample',
      akaname: 'aka12345',
      lastName: 'Last',
      firstName: 'First',
    });

    const { getByText } = render(<Component />);

    await waitForElement(() =>
      getByText(
        JSON.stringify({
          id: 'aka12345',
          userId: 'testExample',
          akaname: 'aka12345',
          lastName: 'Last',
          firstName: 'First',
        })
      )
    );
  });

  test('should set error on rejected promise', async () => {
    avUserApi.me.mockRejectedValueOnce('An error occured');

    const { getByText } = render(<Component />);

    await waitForElement(() => getByText('"An error occured"'));
  });
});
