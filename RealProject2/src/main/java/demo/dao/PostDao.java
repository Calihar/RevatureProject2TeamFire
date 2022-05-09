package demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.model.PostModel;

public interface PostDao extends JpaRepository<PostModel, Integer> {

}
