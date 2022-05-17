package demo.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import demo.dao.UserDao;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class MailControllerTest {

	MailController myCont;

	@Mock
	UserDao userDao;
	


	@BeforeEach
	void setUp() throws Exception {
		myCont = new MailController(userDao);
	}

	
	@Test
	void testSendMail() {
		// ARRANGE
		String email = "hottakesreview@gmail.com";
		
		
		// ACT

		
		// ASSERT

		
	}

}
