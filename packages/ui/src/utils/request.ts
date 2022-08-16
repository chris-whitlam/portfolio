export type RequestMethod = 'POST' | 'GET';
export type RequestBody = object | undefined;

export const makeRequest = async (
  url: string,
  method: RequestMethod = 'GET',
  body: RequestBody = undefined
) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then((response) => {
      const contentType = `${response.headers.get('Content-Type')}`;

      if (response.ok) {
        if (contentType.includes('json')) {
          return response.json().then(resolve, reject);
        }

        if (contentType.includes('text')) {
          return response.text().then(resolve, reject);
        }

        return reject(
          new Error(`Unable to resolve content-type ${contentType}`)
        );
      }

      if (contentType.includes('json')) {
        return response
          .json()
          .then(reject)
          .catch(() => reject(response));
      }

      if (contentType.includes('text')) {
        return response
          .text()
          .then(reject)
          .catch(() => reject(response));
      }

      return reject(response);
    }, reject);
  });
};
