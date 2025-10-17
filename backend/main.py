from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
tasks = []

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Task(BaseModel):
    id:int
    title:str
    completed:bool = False

@app.get("/tasks")
def get_task():
    print("Tasks returned successfully")
    return tasks

@app.post("/tasks")
def create_tasks(task:Task):
    tasks.append(task.dict())
    return {"message": "Task created successfully", "task": task}
