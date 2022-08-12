package com.cdac.server.db;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cdac.server.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}
