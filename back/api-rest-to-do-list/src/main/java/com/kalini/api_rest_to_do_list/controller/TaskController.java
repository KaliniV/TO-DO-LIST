package com.kalini.api_rest_to_do_list.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kalini.api_rest_to_do_list.model.Task;
import com.kalini.api_rest_to_do_list.service.TaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "http://localhost:3000") 
public class TaskController {
	  @Autowired
	    private TaskService taskService;

	  @GetMapping
	    public List<Task> getAllTasks() {
	        return taskService.listTasks();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Task> getTaskById(@PathVariable UUID id) {
	        Optional<Task> task = taskService.findTaskById(id);
	        return task.map(ResponseEntity::ok)
	                   .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public ResponseEntity<Task> createOrUpdateTask(@RequestBody Task task) {
	        if (task.getId() != null) {
	         
	            Optional<Task> existingTask = taskService.findTaskById(task.getId());
	            if (existingTask.isPresent()) {
	                Task updatedTask = existingTask.get();
	                updatedTask.setTitle(task.getTitle());
	                updatedTask.setDescription(task.getDescription());
	                updatedTask.setStatus(task.getStatus());
	                return ResponseEntity.ok(taskService.createTask(updatedTask));
	            }
	        }
	        Task newTask = taskService.createTask(task);
	        return ResponseEntity.status(HttpStatus.CREATED).body(newTask);
	    }


	    @PutMapping("/{id}")
	    public ResponseEntity<Task> updateTask(@PathVariable UUID id, @RequestBody Task taskDetails) {
	        Optional<Task> task = taskService.findTaskById(id);

	        if (task.isPresent()) {
	            Task updatedTask = task.get();
	            updatedTask.setTitle(taskDetails.getTitle());
	            updatedTask.setDescription(taskDetails.getDescription());
	            updatedTask.setStatus(taskDetails.getStatus());
	            return ResponseEntity.ok(taskService.createTask(updatedTask));
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteTask(@PathVariable UUID id) {
	        Optional<Task> task = taskService.findTaskById(id);

	        if (task.isPresent()) {
	            taskService.removeTask(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	}

