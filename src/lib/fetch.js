class Fetch {
  baseUrl;
  headers;

  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async get(url, headers) {
    const fullUrl = this.baseUrl + url;
    const fullHeaders = {
      ...this.headers,
      ...headers,
      method: 'GET',
    };

    const res = await fetch(fullUrl, fullHeaders);
    const fetchData = await res.json();

    return {
      data: fetchData,
    };
  }
}

export const instance = new Fetch('https://randomuser.me/api', {
  'Content-Type': 'application/json',
});
