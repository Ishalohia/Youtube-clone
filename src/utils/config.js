const GOOGLE_API_KEY = "AIzaSyA_4XYFRd1J2471_Cfpikoqadrhx24qI7Y";

export  const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_INFO_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&key="+GOOGLE_API_KEY+"&id=";

export const COMMENT_URL ="https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&maxResults=100&orderby=published&videoId=";

export const LIVE_CHAT_COUNT = 35;


