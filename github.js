class Github {
  constructor() {
    this.client_id = "054464c44b583ea78a62";
    this.client_secret = "61b601b681cb9da7c2b700ce8b6f75137389f83e";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
