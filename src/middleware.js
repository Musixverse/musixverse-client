import { NextRequest, NextResponse } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(NextRequest) {
	const { pathname } = NextRequest.nextUrl;
	const currentUser = NextRequest.cookies.get("currentUser");

	if (currentUser) {
		return NextResponse.next();
	} else {
		if (
			pathname.startsWith("/_next") || // exclude Next.js internals
			pathname.startsWith("/api") || //  exclude all API routes
			pathname.startsWith("/static") || // exclude static files
			PUBLIC_FILE.test(pathname) // exclude all files in the public folder
		) {
			return NextResponse.next();
		} else {
			return NextResponse.next();
		}
	}
}

// export const config = {
// 	matcher: ["/", "/artist-verification", "/404", "/auth"],
// };
