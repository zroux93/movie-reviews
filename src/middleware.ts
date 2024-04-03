import { authMiddleware } from '@clerk/nextjs';

// Set the paths that don't require the user to be signed in
const publicPaths = ['/', '/sign-in*', '/sign-up*'];

export default authMiddleware({ publicRoutes: ['/api/webhooks(.*)'] });

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     * - api
     */
    '/((?!static|.*\\..*|_next|favicon.ico|api).*)',
    '/',
  ],
};
