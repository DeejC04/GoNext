import { ScrollArea } from "@radix-ui/react-scroll-area";
import SingleProject from "./single-project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const singleProjectInfo = {
    "1": {
        name: "Project 1",
        description: "I am describing project 1 lol this is xd funny :3",
        taskCount: 10,
        tasksCompleted: 3,
        tasksList: [
            { id: 1, title: "Design user interface", completed: true },
            { id: 2, title: "Implement authentication", completed: true },
            { id: 3, title: "Set up database", completed: true },
            { id: 4, title: "Create API endpoints", completed: false },
            { id: 5, title: "Write unit tests", completed: false },
            { id: 6, title: "Configure CI/CD pipeline", completed: false },
            { id: 7, title: "Deploy application", completed: false },
            { id: 8, title: "Optimize performance", completed: false },
            { id: 9, title: "Write documentation", completed: false },
            { id: 10, title: "Review code", completed: false },
        ],
    },
    "2": {
        name: "Project 2",
        description: "I am describing project 2 lol this is xd funny :3",
        taskCount: 4,
        tasksCompleted: 3,
        tasksList: [
            { id: 1, title: "Research competitors", completed: true },
            { id: 2, title: "Create wireframes", completed: true },
            { id: 3, title: "Set up hosting", completed: true },
            { id: 4, title: "Create landing page", completed: false },
        ],
    },
    "3": {
        name: "Project 3",
        description: "I am describing project 3 lol this is xd funny :3",
        taskCount: 4,
        tasksCompleted: 3,
        tasksList: [
            { id: 1, title: "Research competitors", completed: true },
            { id: 2, title: "Create wireframes", completed: true },
            { id: 3, title: "Set up hosting", completed: true },
            { id: 4, title: "Create landing page", completed: false },
        ],
    },
};

export default function ProjectsPanel() {
    return (
        <div className="h-screen p-4">
            <Card className="w-full md:w-1/4 flex flex-col">
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle>Projects</CardTitle>
                        <CardDescription>All your projects in one place</CardDescription>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild><Button>New Project</Button></DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add a new project</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="Project name"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="description" className="text-right">
                                            Description
                                        </Label>
                                        <Input
                                            id="description"
                                            defaultValue="Project description"
                                            className="col-span-3"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Add</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden">
                    <ScrollArea className="flex-grow">
                        <div className="space-y-4 pr-4">
                            {Object.keys(singleProjectInfo).map((key) => {
                                const project = singleProjectInfo[key];
                                return (
                                    <SingleProject
                                        key={key}
                                        name={project.name}
                                        description={project.description}
                                        taskCount={project.taskCount}
                                        tasksCompleted={project.tasksCompleted}
                                        taskList={project.tasksList}
                                    />
                                );
                            })}
                        </div>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}