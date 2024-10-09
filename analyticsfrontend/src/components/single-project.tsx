"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

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
  taskList: Array<{ id: number, title: string, completed: boolean }>
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
    { name: 'Completed', value: completedTasks, fill: chartConfig.complete.color },
    { name: 'Remaining', value: totalTasks - completedTasks, fill: chartConfig.remaining.color },
  ]

  return (
    <Card className="mx-auto flex flex-col">
      <CardContent className="flex flex-col p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="flex flex-col space-y-6">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">{name}</CardTitle>
              <CardDescription className="max-h-10 overflow-hidden">{description}</CardDescription>
            </CardHeader>
            <Card className="flex flex-col p-4">
              <CardContent className="p-0 flex flex-col max-h-[150px]">
                <h3 className="text-lg font-semibold mb-4">Tasks</h3>
                <ScrollArea className="flex-grow">
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
                          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${task.completed ? 'line-through text-muted-foreground' : ''
                            }`}
                        >
                          {task.title}
                        </label>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-4">
            <ChartContainer
              config={chartConfig}
              className="w-full h-[200px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="tasks"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {Math.round((completedTasks / totalTasks) * 100)}%
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              complete
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">{completedTasks} of {totalTasks} tasks</p>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  )
}