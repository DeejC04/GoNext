"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function LogActivity() {
    const [activityName, setActivityName] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [category, setCategory] = useState("")
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
            setIsLoading(true)
            setMessage('')

            const formData = {
                activityName,
                hours: parseInt(hours),
                minutes: parseInt(minutes),
                category
            }

        console.log(JSON.stringify(formData))

        }
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Log Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="activity">Action/Activity</Label>
                        <Input
                            id="activity"
                            value={activityName}
                            onChange={(e) => setActivityName(e.target.value)}
                            placeholder="Enter activity"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Time Spent</Label>
                        <div className="flex space-x-2">
                            <div className="flex-1">
                                <Label htmlFor="hours" className="sr-only">Hours</Label>
                                <Input
                                    id="hours"
                                    type="number"
                                    min="0"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                    placeholder="Hours"
                                />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="minutes" className="sr-only">Minutes</Label>
                                <Input
                                    id="minutes"
                                    type="number"
                                    min="0"
                                    max="59"
                                    value={minutes}
                                    onChange={(e) => setMinutes(e.target.value)}
                                    placeholder="Minutes"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="work">Work</SelectItem>
                                <SelectItem value="personal">Personal</SelectItem>
                                <SelectItem value="study">Study</SelectItem>
                                <SelectItem value="exercise">Exercise</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Logging...' : 'Log Activity'}
                    </Button>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${message.includes('Failed') ? 'text-red-600' : 'text-green-600'}`}>
                        {message}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}