const GITHUB_USERNAME = 'mtzrmzia';

interface GitHubContributionsResponse {
  total: Record<string, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: number;
  }>;
}

export default defineCachedEventHandler(
  async () => {
    return await $fetch<GitHubContributionsResponse>(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      {
        query: { y: 'last' },
      },
    );
  },
  { maxAge: 60 * 60 },
);
