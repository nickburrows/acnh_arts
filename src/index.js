/**
 * Cloudflare Worker for ACNH Arts Web Application
 * Serves static files and handles routing
 */

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Default to index.html for root path
    if (pathname === '/') {
      pathname = '/index.html';
    }

    // Try to serve the requested file
    try {
      const response = await fetch(new URL(pathname, 'http://127.0.0.1:8787/').toString());
      
      if (response.status === 404) {
        // If file not found, serve index.html for SPA routing
        return fetch(new URL('/index.html', 'http://127.0.0.1:8787/').toString());
      }

      return response;
    } catch (error) {
      // Fallback to index.html on error
      try {
        return fetch(new URL('/index.html', 'http://127.0.0.1:8787/').toString());
      } catch {
        return new Response('Not Found', { status: 404 });
      }
    }
  },
};
