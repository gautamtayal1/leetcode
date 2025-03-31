"use client"

import { CheckCircle2, MessageSquare } from "lucide-react";
import MonacoEditor from "./MonacoEditor";
import { useState } from "react";


export default function RightPanel({problem}) {
  const [language, setLanguage] = useState("Javascript")
  console.log(problem)

  return (
    <div className="space-y-6">
      {/* Language Selector */}
      <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl border border-indigo-500/20 p-2">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-indigo-400 transition">
              
              <select name="Language" 
              onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="Javascript">Javascript</option>
                <option value="Cpp">C++</option>
              </select>
            </button>
                </div>

          {/* Editor Container - Will be replaced with Monaco */}
          <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl border border-indigo-500/20 h-[600px] relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500" >
            <MonacoEditor 
              defaultCode={language === "Javascript" ? problem?.defaultCode?.[1]?.code : problem?.defaultCode?.[0]?.code}
              language={language === "Javascript" ? "javascript" : "cpp"} 
            />
            </div>
          </div>

          {/* Control Panel */}
          <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl border border-indigo-500/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>

          {/* Console Output */}
          <div className="bg-gray-900/40 backdrop-blur-xl rounded-xl border border-indigo-500/20 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300 font-medium">Console Output</span>
            </div>
            <pre className="text-gray-300 font-mono text-sm">
              Your code output will appear here
            </pre>
          </div>
        </div>
  );
}
