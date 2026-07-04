const LASTFM_USERNAME = 'mtzrmzia';

interface LastFmRecentTracksResponse {
  recenttracks: {
    track: Array<{
      name: string;
      artist: { '#text': string };
      url: string;
      '@attr'?: { nowplaying: string };
    }>;
  };
}

export default defineCachedEventHandler(
  async (event) => {
    const { lastfmApiKey } = useRuntimeConfig(event);

    const response = await $fetch<LastFmRecentTracksResponse>(
      'https://ws.audioscrobbler.com/2.0/',
      {
        query: {
          method: 'user.getrecenttracks',
          user: LASTFM_USERNAME,
          api_key: lastfmApiKey,
          format: 'json',
          limit: 1,
        },
      },
    );

    const track = response.recenttracks.track?.[0];

    if (!track) {
      return null;
    }

    return {
      title: track.name,
      artist: track.artist['#text'],
      url: track.url,
      nowPlaying: track['@attr']?.nowplaying === 'true',
    };
  },
  { maxAge: 60 },
);
