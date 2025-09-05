import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "GreenNet is the best";

// Publicly accessible routes
const publicRoutes = ['/', '/signin', '/signup'];

// Routes meant only for unauthenticated users
const authRoutes = ['/signin', '/signup'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  let isAuthenticated = false;

  if (token) {
   isAuthenticated = true;
  }

  // Redirect authenticated users away from signin/signup
  if (authRoutes.includes(pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL('/Dashboard', request.url));
  }

  // Redirect unauthenticated users trying to access protected routes
  const isPublicRoute = publicRoutes.includes(pathname);
  if (!isPublicRoute && isAuthenticated == false) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: [
        // Run on all routes except:
        // - api routes
        // - static files
        // - image optimization files
        // - public files like favicon or images
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
