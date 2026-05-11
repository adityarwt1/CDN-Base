import React from 'react';
import Link from 'next/link';
import { Database, Code, Zap, ExternalLink } from 'lucide-react';

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
              <Database className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">CDN BaseJS</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* GitHub Link */}
            <Link 
              href="https://github.com/adityarwt1/CDN-Base"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Repository</span>
            </Link>
            
            {/* LinkedIn Link */}
            <Link 
              href="https://www.linkedin.com/in/aditya-rawat-3862182b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-medium">Author</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-yellow-500 font-medium">Under Development</span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CDN BaseJS
          </h2>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Database Operations Simplified Through <span className="text-blue-400 font-semibold">API Calls</span>
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pure API Operations</h3>
              <p className="text-zinc-400 text-sm">
                Perform database operations using simple URL/API calls—no external modules required
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero Dependencies</h3>
              <p className="text-zinc-400 text-sm">
                Lightweight and efficient—no heavy packages or complex setup needed
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-pink-500/50 transition-all">
              <div className="bg-pink-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">CDN Delivery</h3>
              <p className="text-zinc-400 text-sm">
                Fast, reliable access through CDN—integrate with just a URL
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <ExternalLink className="w-6 h-6 text-blue-400" />
              Our Mission
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
              We're building a revolutionary way to interact with databases—
              <span className="text-blue-400 font-semibold"> just call a URL or API</span>, and you're done. 
              No installations, no configurations, no external modules. 
              <span className="text-purple-400 font-semibold"> Pure simplicity</span> for modern developers.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="text-zinc-500">
            <p className="text-sm">We're working hard to bring this to life. Stay tuned!</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()}CDN BaseJS. Built with ❤️ for developers who love simplicity.</p>
        </div>
      </footer>
    </div>
  );
}