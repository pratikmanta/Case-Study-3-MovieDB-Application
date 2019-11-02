const config = () => {
    
    const baseUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'e4b42029565ddd4ae1cda2cf3efaf39f';
    const registerUrl ="https://www.themoviedb.org/account/signup"
    const requestTokenUrl = "https://api.themoviedb.org/3/authentication/token/new?api_key="+apiKey
    const sessionUrl = "https://api.themoviedb.org/3/authentication/session/new?api_key="+apiKey+"&request_token="
    const authenticationUrl = "https://www.themoviedb.org/authenticate/"
    const firstRedirect = "?redirect_to=http://localhost:3000/success"
    const addWatchlistUrl = `https://api.themoviedb.org/3/account/{}/watchlist?api_key=${apiKey}&session_id=`
    const getWatchlistUrl = `https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=${apiKey}&language=en-US&sort_by=created_at.desc&page=1&session_id=`
    const profileUrl = "http://localhost:3000/profile";
    
    let details = {
        'apiKey':apiKey,
        "baseUrl":baseUrl,
        "registerUrl":registerUrl,
        "requestTokenUrl":requestTokenUrl,
        "sessionUrl":sessionUrl,
        "authenticationUrl":authenticationUrl,
        "firstRedirect":firstRedirect,
        "addWatchlistUrl":addWatchlistUrl,
        "getWatchlistUrl":getWatchlistUrl,
        "profileUrl":profileUrl
    }

    return details ;
}


module.exports.config = config;