import AddTasks from "@/components/AddTasks";
import TasksCard from "@/components/TasksCard";
import { createATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";


const TasksPage = async () => {
     const tasks = await getTasks()
    return (
        <div>
            <h2 className="text-6xl text-purple-500 font-bold mb-4">Tasks: {tasks.length}</h2>
            <AddTasks createATask ={createATask}></AddTasks>
            <Link href="/tasks/new">
               <Button variant="secondary">Add Task</Button>
            </Link>
            <div>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;