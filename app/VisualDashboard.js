import { Calendar } from "lucide-react";

export default function VisualDashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-2">🎯 Daily Micro Goals</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>✅ English: 15 min reading/listening</li>
          <li>✅ English: 15 min writing/speaking</li>
          <li>✅ 1 lesson (CS50, Odin, freeCodeCamp)</li>
          <li>✅ 1 project task (code, doc, analysis)</li>
          <li>✅ Notion reflection & update</li>
          <li>✅ GitHub commit (if relevant)</li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-2">📆 Project Timeline</h2>
        <div className="flex items-center text-sm mb-2 gap-2">
          <Calendar className="w-4 h-4" /> Start: Today
        </div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div className="bg-blue-500 h-2 rounded" style={{ width: "35%" }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">35% complete</p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-4 col-span-1 md:col-span-2 xl:col-span-3">
        <h2 className="text-xl font-bold mb-4">📚 Learning Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <p className="font-medium text-sm">CS50 Harvard</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-green-500 h-2 rounded" style={{ width: "60%" }}></div>
            </div>
            <p className="text-xs mt-1">60% complete</p>
          </div>
          <div>
            <p className="font-medium text-sm">The Odin Project</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-yellow-500 h-2 rounded" style={{ width: "40%" }}></div>
            </div>
            <p className="text-xs mt-1">40% complete</p>
          </div>
          <div>
            <p className="font-medium text-sm">freeCodeCamp</p>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-red-500 h-2 rounded" style={{ width: "25%" }}></div>
            </div>
            <p className="text-xs mt-1">25% complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}