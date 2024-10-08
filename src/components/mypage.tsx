/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jYBolHWfAi8
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

'use client';

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "components/ui/card"

export function MyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-purple-100 to-purple-200">
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold text-purple-800" prefetch={false}>
          OaaSIS ROUTING ENGINE
        </Link>        
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-sm text-gray-700">
            Documentation
          </a>
          <a href="#" className="text-sm text-gray-700">
            Company
          </a>
        </nav>
      </header>
      
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>API Usage Statistics</CardTitle>
                <CardDescription>View your daily, monthly, and hourly API usage statistics.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-4xl font-bold">1,234</div>
                    <div className="text-sm text-muted-foreground">Daily</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-4xl font-bold">35,678</div>
                    <div className="text-sm text-muted-foreground">Monthly</div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-4xl font-bold">156</div>
                    <div className="text-sm text-muted-foreground">Hourly</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>API Limit Information</CardTitle>
                <CardDescription>Check your current API limit and usage.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>API Limit</div>
                    <div className="font-medium">50,000 requests/month</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>API Usage</div>
                    <div className="font-medium">35,678 requests</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Remaining Requests</div>
                    <div className="font-medium">14,322 requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your App Key</CardTitle>
                <CardDescription>This is your unique API key for accessing the Acme API.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>App Key</div>
                  <div className="font-medium">
                    <code>abc123def456ghi789</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="flex h-16 items-center justify-center border-t bg-muted">
        <p className="text-sm text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}
