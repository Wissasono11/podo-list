class SpotifyManager {
  constructor() {
    this.config = {
      // Update with your exact Client ID (remove extra spaces)
      clientId: "8289af8c8c69478cb5a6c09fb490e904",
      clientSecret: "519b48d328e9465aa50f249387fe749c",
      // Match exact redirect URI from Spotify Dashboard
      redirectUri: "http://127.0.0.1:5500/index.html",
    };
    this.accessToken = localStorage.getItem("spotify_access_token");
    this.scope =
      "user-read-private user-read-email playlist-read-private streaming";
    this.debug = true;
  }

  //add debug method
  log(message, data) {
    if (this.debug) {
      console.log(`[Spotify] ${message}`, data || "");
    }
  }

  // Auth Methods
  login() {
    try {
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${
        this.config.clientId
      }&response_type=code&redirect_uri=${encodeURIComponent(
        this.config.redirectUri
      )}&scope=${encodeURIComponent(this.scope)}`;

      this.log("Redirecting to auth URL:", authUrl);
      window.location.href = authUrl;
    } catch (error) {
      this.log("Login error:", error);
      throw error;
    }
  }

  async handleCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      await this.getAccessToken(code);
    }
  }

  async getAccessToken(code) {
    try {
      this.log("Getting access token with code:", code);
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(this.config.clientId + ":" + this.config.clientSecret),
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
          this.config.redirectUri
        )}`,
      });

      const data = await response.json();
      this.log("Token response:", data);

      if (data.error) {
        throw new Error(data.error_description || "Failed to get access token");
      }

      if (data.access_token) {
        this.accessToken = data.access_token;
        localStorage.setItem("spotify_access_token", data.access_token);
        return data.access_token;
      }

      throw new Error("No access token received");
    } catch (error) {
      this.log("Auth Error:", error);
      throw error;
    }
  }

  // API Methods
  async getPlaylist(playlistId) {
    try {
      if (!this.accessToken) throw new Error("No access token");
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );
      if (!response.ok) throw new Error("Playlist fetch failed");
      return await response.json();
    } catch (error) {
      console.error("Playlist Error:", error);
      return null;
    }
  }

  async getUserPlaylists() {
    try {
      if (!this.accessToken) throw new Error("No access token");
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });
      if (!response.ok) throw new Error("User playlists fetch failed");
      return await response.json();
    } catch (error) {
      console.error("Playlists Error:", error);
      return null;
    }
  }

  async loadPlaylist(playlistId) {
    const playlist = await this.getPlaylist(playlistId);
    if (playlist) {
      const iframe = document.getElementById("spotify-iframe");
      if (iframe) {
        iframe.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
        return true;
      }
    }
    return false;
  }

  // Helper Methods
  isAuthenticated() {
    return !!this.accessToken;
  }

  logout() {
    this.accessToken = null;
    localStorage.removeItem("spotify_access_token");
  }
}

// Create single instance
const spotify = new SpotifyManager();

// Auto handle callback if present
if (window.location.search.includes("code=")) {
  spotify.handleCallback();
}
