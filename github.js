class Github {
  constructor() {
    this.client_id = '299ee229842b23bf2f1d';
    this.client_secret = '6e58dcc2f080e7166d6c0eff4db892c217d43ec8';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  getUser = async (userName) => {
    const userApiResponse = await fetch(
      `https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoApiResponse = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await userApiResponse.json();
    const repos = await repoApiResponse.json();
    return {
      profile,
      repos,
    };
  };
}
