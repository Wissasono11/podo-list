async function handleSpotifyAuth() {
  try {
    document.getElementById("spotify-login-btn").disabled = true;
    await spotify.login();
  } catch (error) {
    console.error("Auth error:", error);
    document.getElementById("spotify-login-btn").disabled = false;
  }
}

async function handleSpotifyLogout() {
  try {
    spotify.logout();
    clearPlaylists();
    updateSpotifyUI(false);
  } catch (error) {
    console.error("Logout error:", error);
  }
}

function clearPlaylists() {
  const container = document.querySelector(".playlists-container");
  if (container) {
    container.remove();
  }
}

async function loadUserPlaylists() {
  try {
    const loadingEl = document.createElement("div");
    loadingEl.className = "loading-playlists";
    loadingEl.textContent = "Loading playlists...";
    document.querySelector(".sidebar-content").appendChild(loadingEl);

    const playlists = await spotify.getUserPlaylists();
    loadingEl.remove();

    if (playlists && playlists.items) {
      const playlistsContainer = document.createElement("div");
      playlistsContainer.className = "playlists-container";

      playlists.items.forEach((playlist) => {
        const playlistElement = createPlaylistElement(playlist);
        playlistsContainer.appendChild(playlistElement);
      });

      document
        .querySelector(".sidebar-content")
        .appendChild(playlistsContainer);
    } else {
      showError("Failed to load playlists");
    }
  } catch (error) {
    console.error("Loading playlists error:", error);
    showError("Error loading playlists");
  }
}

function createPlaylistElement(playlist) {
  const element = document.createElement("div");
  element.className = "playlist-item";
  element.innerHTML = `
        <img src="${
          playlist.images[0]?.url || "images/default-playlist.png"
        }" alt="${playlist.name}">
        <span>${playlist.name}</span>
    `;
  element.onclick = async () => {
    try {
      element.classList.add("loading");
      const success = await spotify.loadPlaylist(playlist.id);
      if (!success) {
        showError("Failed to load playlist");
      }
    } catch (error) {
      console.error("Loading playlist error:", error);
      showError("Error loading playlist");
    } finally {
      element.classList.remove("loading");
    }
  };
  return element;
}

function showError(message) {
  console.error("[Spotify Error]", message);
  const errorEl = document.createElement("div");
  errorEl.className = "spotify-error";
  errorEl.textContent = message;

  // Remove existing error if any
  const existingError = document.querySelector(".spotify-error");
  if (existingError) {
    existingError.remove();
  }

  document.querySelector(".sidebar-content").appendChild(errorEl);
  setTimeout(() => errorEl.remove(), 5000);
}

// showAccessToken
function showAccessToken() {
  const token = localStorage.getItem("spotify_access_token");
  if (token) {
    console.log("Access Token:", token);
    const tokenDisplay = document.createElement("div");
    tokenDisplay.style.color = "white";
    tokenDisplay.style.padding = "10px";
    tokenDisplay.style.wordBreak = "break-all";
    tokenDisplay.textContent = `Token: ${token}`;
    document.querySelector(".sidebar-content").prepend(tokenDisplay);
  } else {
    console.log("No access token found");
  }
}

function updateSpotifyUI(isLoggedIn) {
  try {
    const loginBtn = document.getElementById("spotify-login-btn");
    const logoutBtn = document.getElementById("spotify-logout-btn");

    if (loginBtn && logoutBtn) {
      loginBtn.disabled = false;
      loginBtn.style.display = isLoggedIn ? "none" : "block";
      logoutBtn.style.display = isLoggedIn ? "block" : "none";

      if (isLoggedIn) {
        loadUserPlaylists();
      } else {
        clearPlaylists();
      }
    }
  } catch (error) {
    console.error("UI update error:", error);
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  try {
    updateSpotifyUI(spotify.isAuthenticated());
  } catch (error) {
    console.error("Initialization error:", error);
  }
});
