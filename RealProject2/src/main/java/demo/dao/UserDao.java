package demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.model.UserModel;

public interface UserDao extends JpaRepository<UserModel, Integer> {

}
