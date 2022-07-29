export type RequestMethod = 'POST' | 'GET';
export type RequestBody = any | undefined;

export const makeRequest = async (
  url: string, 
  method: RequestMethod = 'GET', 
  body: RequestBody
) => {
  return new Promise((resolve, reject) => {
    fetch(
      url, 
      { 
        method, 
        body: JSON.stringify(body)
      }
    ).then(response => {
      const contentType = `${response.headers.get('Content-Type')}`;

      if (response.ok) {
        if (contentType.includes('/json')) {
          return response.json().then(resolve, reject);
        }

        reject(`Unable to resolve content-type ${contentType}`);
      }

      if (contentType.includes('/json')) {
        return response.json().then(reject).catch(() => reject(response));
      }

      reject(response);
    }, 
    reject
    )
  })
}