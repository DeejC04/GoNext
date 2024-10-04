import LogActivity from "@/components/LogActivity";
import SingleProject from "@/components/SingleProject";

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
};

export default function Home() {
  return (
    <div>
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
  );
}