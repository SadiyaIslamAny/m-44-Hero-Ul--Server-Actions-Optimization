"use client";
import { newTaskAction } from "@/lib/actions";
import { Input, Label, TextField, Select, ListBox, Button,Form, FieldError } from "@heroui/react";


const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-5xl">Add a new task</h2>
            <div>
                <Form action={newTaskAction} className="flex flex-col gap-4">
                                  <TextField
                                  isRequired
                                  minLength={5}
                                  validate={(value) =>{
                                  if(value.length <5){
                                     return "title must be at least 5 characters";
                                    }
                                  }
                                  }
                                  className="w-full" name="title" type="text">
                                    <Label>Title</Label>
                                    <Input placeholder="Enter your task title" />
                                     <FieldError />
                                  </TextField>
                                  <TextField className="w-full" name="description" type="description">
                                    <Label>Task description</Label>
                                    <Input placeholder="Enter your task description" />
                                  </TextField>
                                  <Select name="priority" className="w-[256px]" placeholder="Select one">
                                    <Label>Priority</Label>
                                    <Select.Trigger>
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="low" textValue="Low">
                                          Low
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="medium" textValue="Medium">
                                          Medium
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="high" textValue="high">
                                          High
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                                
                                    <Select name="status" className="w-[256px]" placeholder="Select one">
                                    <Label>status</Label>
                                    <Select.Trigger>
                                      <Select.Value />
                                      <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                      <ListBox>
                                        <ListBox.Item id="pending" textValue="pending">
                                          Pending
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="in-progress" textValue="in-progress">
                                          In-progress
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="completed" textValue="completed">
                                          Completed
                                          <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                      </ListBox>
                                    </Select.Popover>
                                  </Select>
                
                                  <TextField className="w-full" name="dueDate">
                                    <Label>DueDate</Label>
                                    <Input placeholder="Enter your task dueDate" />
                                  </TextField>
                                    <Button slot="close" variant="secondary">
                                      Cancel
                                    </Button>
                                    <Button slot="close" type="submit">Submit Task</Button>
                                </Form>
            </div>
        </div>
    );
};

export default NewTask;