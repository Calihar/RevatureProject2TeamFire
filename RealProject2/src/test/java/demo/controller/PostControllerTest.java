package demo.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.util.ProfanityFilter;
import demo.util.StorageService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class PostControllerTest {
	
	PostController myCont;
	
	@Mock
	UserDao uDao;
	
	@Mock
	PostDao pDao;
	
	@Mock
	CommentDao cDao;
	
	@Mock
	StorageService storeServ;
	
	@Mock
	ProfanityFilter pF;
	
	@BeforeEach
	void setUp() {
		myCont = new PostController(uDao, pDao, cDao, storeServ, pF);
	}
	
	@Test
	void test() {
		
	}
	
	
	
	
	

}
