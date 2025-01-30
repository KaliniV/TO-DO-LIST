package com.kalini.api_rest_to_do_list.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kalini.api_rest_to_do_list.model.Task;
import com.kalini.api_rest_to_do_list.repository.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	 private TaskRepository taskRepository;
	
	public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> listTasks() {
        return taskRepository.findAll();
    }
    public Optional<Task> findTaskById(UUID id) {
        return taskRepository.findById(id);
    }

    public Task updateTask(UUID id, Task taskDetails) {
        return taskRepository.findById(id).map(task -> {
            task.setTitle(taskDetails.getTitle());
            task.setDescription(taskDetails.getDescription());
            task.setStatus(taskDetails.getStatus());
            return taskRepository.save(task);
        }).orElseThrow(() -> new RuntimeException("Tarefa não encontrada com o id " + id));
    }

    public void removeTask(UUID id) {
        taskRepository.deleteById(id);
    }
    }