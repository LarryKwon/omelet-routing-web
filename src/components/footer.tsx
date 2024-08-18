
'use client';

export function Footer(){
    return (
        <footer className="flex h-16 items-center justify-center border-t bg-muted">
        <p className="text-sm text-muted-foreground">&copy; Copyright © 2024 by developers.oasis.cc</p>
      </footer>
    )
}

export function MainFooter(){
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="text-center">
          <p className="text-lg">For urgent responses, Just drop us email –{" "}
            <a href="#" className="underline">
              info@site.com
            </a>
          </p>
          <p className="mt-4 text-sm">Copyright © 2024 by developers.oasis.cc</p>
        </div>
      </footer>
    )
}