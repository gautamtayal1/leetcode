"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

import React from 'react';
import { Code2, Terminal, Cpu, Network, User} from 'lucide-react';
import Link from "next/link";

export const Navbar = () => {
  const {data: session} = useSession()
  return (
    <nav className="bg-gray-900/80 backdrop-blur-xl border-b border-indigo-500/20 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code2 className="h-8 w-8 text-indigo-400 glow-effect" />
              <div className="absolute -inset-1 bg-indigo-500 opacity-20 rounded-full blur-sm"></div>

              <div className="absolute h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent -right-16 top-1/2 circuit-line"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              CodeQuest
            </span>
          </div>
          </Link>
          
          <div className="flex space-x-8">
            <button className="text-gray-300 hover:text-indigo-400 transition flex items-center space-x-1 relative group">
              <Terminal className="w-4 h-4" />
              <Link href="/problems">Problems</Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button className="text-gray-300 hover:text-indigo-400 transition flex items-center space-x-1 relative group">
              <Cpu className="w-4 h-4" />
              <span>Contest</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button className="text-gray-300 hover:text-indigo-400 transition flex items-center space-x-1 relative group">
              <Network className="w-4 h-4" />
              <span>Leaderboard</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
          </div>

          <div className="flex items-center space-x-4">
            
            {session?.user &&
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-lg border border-indigo-500/20">
              <User className="w-4 h-4 text-indigo-400" />
              <span className="text-gray-300">{session?.user?.name}</span>
            </div>
            }
              
            {session?.user 
              ?
                <Button onClick={() => {signOut()}}
                className="bg-gray-800/50  rounded-lg hover:bg-gray-700/50 transition border border-indigo-500/20 group">Logout</Button>
              :
                <Button onClick={() => {signIn()}}
                className="bg-gray-800/50  rounded-lg hover:bg-gray-700/50 transition border border-indigo-500/20 group">Login</Button>}
       
          </div>
        </div>
      </div>
    </nav>
  );
}
