package com.kalini.api_rest_to_do_list.repository;


import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.kalini.api_rest_to_do_list.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {

}