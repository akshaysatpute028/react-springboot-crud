package com.cdac.server.service;

import com.cdac.server.model.User;

public interface UserService {
    public User save(User user);

    public Iterable<User> findAll();

    public User findById(int id);

    public void deleteById(int id);
}
