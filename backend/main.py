from fastapi import FastAPI
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
tasks = []
courses = []

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

class Course(BaseModel):
    id:int
    course_name:str
   

@app.get("/tasks")
def get_task():
    print("Tasks returned successfully")
    return tasks

@app.post("/tasks")
def create_tasks(task:Task):
    tasks.append(task.dict())
    return {"message": "Task created successfully", "task": task}

@app.post("/courses")
def create_courses(course: Course):
    courses.append(course.dict())
    return{"message":"Course added succesfully", "course": course}

@app.get("/courses")
def get_courses():
    print("Courses returned successfully")
    return courses