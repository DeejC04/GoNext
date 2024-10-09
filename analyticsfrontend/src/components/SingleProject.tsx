"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const chartConfig = {
    tasks: {
        label: "tasks",
    },
    complete: {
        label: "Complete",
        color: "hsl(var(--chart-complete))",
    },
    remaining: {
        label: "Remaining",
        color: "hsl(var(--chart-inprog))",
    },
} satisfies ChartConfig

export default function SingleProject({ name, description, taskCount, tasksCompleted, taskList }: {
    name: string,
    description: string,
    taskCount: number,
    tasksCompleted: number
    taskList: any[]
}) {
    const [tasks, setTasks] = useState(taskList)

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ))
    }

    const completedTasks = tasks.filter(task => task.completed).length
    const totalTasks = tasks.length

    const chartData = [
        { name: 'Completed', value: tasksCompleted },
        { name: 'Remaining', value: taskCount - tasksCompleted },
      ]

return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">Project Progress</CardTitle>
              <CardDescription>Track the progress of your project and manage tasks.</CardDescription>
            </CardHeader>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-4">Tasks</h3>
                <ul className="space-y-3">
                  {tasks.map(task => (
                    <li key={task.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`task-${task.id}`}
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(task.id)}
                      />
                      <label
                        htmlFor={`task-${task.id}`}
                        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                          task.completed ? 'line-through text-muted-foreground' : ''
                        }`}
                      >
                        {task.title}
                      </label>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-4">

CHART GOES HERE
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">{completedTasks} of {totalTasks} tasks</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}



// return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardContent className="p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-6">
//             <CardHeader className="p-0">
//               <CardTitle className="text-2xl font-bold">Project Progress</CardTitle>
//               <CardDescription>Track the progress of your project and manage tasks.</CardDescription>
//             </CardHeader>
//             <Card>
//               <CardContent className="p-4">
//                 <h3 className="text-lg font-semibold mb-4">Tasks</h3>
//                 <ul className="space-y-3">
//                   {tasks.map(task => (
//                     <li key={task.id} className="flex items-center space-x-2">
//                       <Checkbox
//                         id={`task-${task.id}`}
//                         checked={task.completed}
//                         onCheckedChange={() => toggleTaskCompletion(task.id)}
//                       />
//                       <label
//                         htmlFor={`task-${task.id}`}
//                         className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
//                           task.completed ? 'line-through text-muted-foreground' : ''
//                         }`}
//                       >
//                         {task.title}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-4">
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={chartData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {chartData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold fill-current">
//                   {Math.round((completedTasks / totalTasks) * 100)}%
//                 </text>
//               </PieChart>
//             </ResponsiveContainer>
//             <div className="text-center mt-4">
//               <p className="text-sm text-muted-foreground">{completedTasks} of {totalTasks} tasks</p>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }