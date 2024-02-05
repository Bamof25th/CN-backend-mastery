
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import Task from './task.schema.js';

const app = express();
app.use(express.json());

app.use(cors());

export const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connection made.");

    // Send existing tasks to the connected client
    Task.find()
        .then(tasks => {
            socket.emit('tasks', tasks);
        })
        .catch(err => {
            console.error('Error fetching tasks:', err);
        });

    // Event handler for creating a new task
    socket.on("createTask", (text) => {
        const newTask = new Task({ text });
        newTask.save()
            .then(savedTask => {
                io.emit("newTask", savedTask);
            })
            .catch(err => {
                console.error('Error creating task:', err);
            });
    });

    // Event handler for deleting a task
    socket.on("deleteTask", (taskId) => {
        Task.findByIdAndRemove(taskId)
            .then(() => {
                io.emit("taskDeleted", taskId);
            })
            .catch((err) => {
                console.error("Error deleting task:", err);
            });
    });

    // Event handler for updating a task
    socket.on("updateTask", (taskId, newText) => {
        Task.findByIdAndUpdate(
            taskId,
            { text: newText },
            { new: true }
            )
            .then((updatedTask) => {
                io.emit("taskUpdated", updatedTask);
            })
            .catch((err) => {
                console.error("Error updating task:", err);
            });
    });

    // Event handler for disconnecting
    socket.on("disconnect", () => {
        console.log("Connection disconnected.");
    });
});


