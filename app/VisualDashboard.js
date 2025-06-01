import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Calendar } from "lucide-react";

export default function VisualDashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', padding: '20px' }}>
      <Card>
        <CardContent>
          <h2>🎯 Daily Micro Goals</h2>
          <ul>
            <li>✅ English: 15 min reading/listening</li>
            <li>✅ English: 15 min writing/speaking</li>
            <li>✅ 1 lesson (CS50, Odin, freeCodeCamp)</li>
            <li>✅ 1 project task (code, doc, analysis)</li>
            <li>✅ Notion reflection & update</li>
            <li>✅ GitHub commit (if relevant)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2>📆 Project Timeline</h2>
          <p>Start: Today</p>
          <Progress value={35} />
          <p style={{ fontSize: '12px' }}>35% complete</p>
        </CardContent>
      </Card>

      <Card style={{ gridColumn: '1 / -1' }}>
        <CardContent>
          <h2>📚 Learning Progress</h2>
          <p>CS50 Harvard</p>
          <Progress value={60} />
          <p>The Odin Project</p>
          <Progress value={40} />
          <p>freeCodeCamp</p>
          <Progress value={25} />
        </CardContent>
      </Card>
    </div>
  );
}