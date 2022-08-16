import fetchMock from 'jest-fetch-mock';
import { makeRequest } from './request';

describe('Utils -> Request', () => {
  const url = 'https://chriswhitlam.dev';

  beforeEach(async () => {
    fetchMock.resetMocks();
  });

  it('should successfully handle json content-type', async () => {
    const expectedResponse = JSON.stringify({ message: 'Success' });

    fetchMock.mockResponseOnce(JSON.stringify(expectedResponse), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await makeRequest(url);

    expect(result).toStrictEqual(expectedResponse);
  });

  it('should successfully handle text content-type', async () => {
    const expectedResponse = 'Success';

    fetchMock.mockResponseOnce(expectedResponse, {
      headers: {
        'Content-Type': 'text/html'
      }
    });

    const result = await makeRequest(url);

    expect(result).toStrictEqual(expectedResponse);
  });

  it('should successfully make POST request', async () => {
    const body = {};
    const expectedResponse = { message: 'Success' };

    fetchMock.mockResponseOnce(JSON.stringify(expectedResponse), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await makeRequest(url, 'POST', body);

    expect(result).toStrictEqual(expectedResponse);
  });

  it('should throw error if fails', async () => {
    const expectedError = new Error('Something went wrong');

    fetchMock.mockRejectOnce(expectedError);

    expect(makeRequest(url, 'GET')).rejects.toThrowError(expectedError);
  });

  it('should throw error if unsupported content-type', async () => {
    const contentType = 'random/content-type';

    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Success' }), {
      headers: {
        'Content-Type': contentType
      }
    });

    expect(makeRequest(url, 'GET')).rejects.toThrowError(
      new Error(`Unable to resolve content-type ${contentType}`)
    );
  });
});
