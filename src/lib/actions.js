'use server'
import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";
import { redirect } from "next/navigation";

export const createATask = async(formData) =>{

//   rules 1:
//   const title = formData.get('title');
//   const description = formData.get('description');
//   const status = formData.get('status');
//   const priority = formData.get('priority');
//   const dueDate = formData.get('dueDate');

//   const newTask = {title, description, status, priority, dueDate}


// rules - 2:
const newTask = Object.fromEntries(formData.entries())

  console.log('adding a task with name:', newTask, formData);
  const res = await postTask(newTask);
  if(res.ok){
    revalidatePath('/tasks')
  }
  return res;

}


export const newTaskAction = async(formData) =>{
    'use server'
    const newTask = Object.fromEntries(formData.entries());
    console.log('adding task with name', newTask);
    const res = await postTask(newTask);
    if(res.ok){
        revalidatePath('/tasks');
        redirect('/tasks');
    }
    return res;
}