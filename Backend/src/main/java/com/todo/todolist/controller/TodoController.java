package com.todo.todolist.controller;

import com.todo.todolist.entity.Todo;
import com.todo.todolist.repository.TodoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    private final TodoRepository todoRepository;

    public TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }
    @GetMapping
    public List<Todo> getAllTasks() {
        return todoRepository.findAll();
    }
    @GetMapping("/{id}")
    public Todo getTask(@PathVariable Integer id){
        return todoRepository.findById(id).orElse(null);
    }
    @PostMapping
    public Todo setTask(@RequestBody Todo task){
return todoRepository.save(task);
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        todoRepository.deleteById(id);
    }
    @PutMapping("/{id}")
    public Todo updateTask(@PathVariable Integer id,
                           @RequestBody Todo updatedTodo) {
        return todoRepository.findById(id)
                .map(task -> {
                    task.setContent(updatedTodo.getContent());
                    task.setDone(updatedTodo.isDone());
                    return todoRepository.save(task);
                })
                .orElse(null);
    }
}
