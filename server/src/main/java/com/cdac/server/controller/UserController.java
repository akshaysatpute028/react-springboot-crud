package com.cdac.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.client.ResourceAccessException;

import com.cdac.server.service.UserService;
import com.cdac.server.db.UserRepository;
import com.cdac.server.model.*;

@CrossOrigin(origins = { "http://localhost:3000/" })
@RestController
@RequestMapping(path = "/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public Iterable<User> getUsers() {
        Iterable<User> user = userService.findAll();
        return user;
    }

    @PostMapping("/")
    public User postUser(@RequestBody User user) {
        User user1 = userService.save(user);
        return user1;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable(value = "id") int id) {
        userService.deleteById(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findUser(@PathVariable(value = "id") int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Employee does not exists with id : " + id));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") int id, @RequestBody User user) {
        User updateUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Employee does not exists with id : " + id));

        updateUser.setId(user.getId());
        updateUser.setFirstName(user.getFirstName());
        updateUser.setLastName(user.getLastName());
        updateUser.setAddress(user.getAddress());
        updateUser.setEmail(user.getEmail());
        updateUser.setPhone(user.getPhone());

        userRepository.save(updateUser);

        return ResponseEntity.ok(updateUser);
    }

    /*
     * @PutMapping("/{id}")
     * public User updateUser(@PathVariable(value = "id") int id, @RequestBody User
     * user) {
     * userService.findById(id);
     * return userService.save(user);
     * }
     * 
     * 
     * /*
     * 
     * @GetMapping("/{id}")
     * public User findUser(@PathVariable(value = "id") int id) {
     * return userService.findById(id);
     * }
     */
}
