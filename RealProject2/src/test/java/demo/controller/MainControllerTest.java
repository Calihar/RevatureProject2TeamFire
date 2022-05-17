package demo.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import javax.servlet.http.HttpSession;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import demo.dao.CommentDao;
import demo.dao.PostDao;
import demo.dao.UserDao;
import demo.model.UserModel;
import demo.util.StorageService;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class MainControllerTest {

	MainController myCont;

	@Mock
	UserDao userDao;

	@Mock
	PostDao postDao;

	@Mock
	CommentDao commentDao;

	@Mock
	StorageService storeServ;

	@Mock
	HttpSession session1;
	@Mock
	HttpSession session2;

	@BeforeEach
	void setUp() throws Exception {
		myCont = new MainController(userDao, postDao, commentDao, storeServ);
	}

	@Test
	void testRouteLandingPage() {
		// ARRANGE
		String myExpectedStr = "/landing.html";

		// ACT
		String myTestStr = myCont.routeLandingPage();

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);

	}

	@Test
	void testRouteLoginPage() {
		// ARRANGE
		String myExpectedStr = "/html/login.html";

		// ACT
		String myTestStr = myCont.routeLoginPage();

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);
	}

	@Test
	void testRouteRegisterPage() {
		// ARRANGE
		String myExpectedStr = "/html/register.html";

		// ACT
		String myTestStr = myCont.routeRegisterPage();

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);

	}

	@Test
	void testRouteAboutUsPage() {
		// ARRANGE
		String myExpectedStr = "/html/aboutus.html";

		// ACT
		String myTestStr = myCont.routeAboutUsPage();

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);

	}

	@Test
	void testRouteHomePage() {
		// ARRANGE
		UserModel testUser = new UserModel();
		String myExpectedStr1 = "/landing.html";
		String myExpectedStr2 = "/html/home.html";
		when(session1.getAttribute("loggedUser")).thenReturn(null);
		when(session2.getAttribute("loggedUser")).thenReturn(testUser);

		// ACT
		String myTestStr1 = myCont.routeHomePage(session1);
		String myTestStr2 = myCont.routeHomePage(session2);

		// ASSERT
		assertEquals(myExpectedStr1, myTestStr1);
		assertEquals(myExpectedStr2, myTestStr2);
		verify(session1, times(1)).getAttribute("loggedUser");
		verify(session2, times(1)).getAttribute("loggedUser");
	}

	@Test
	void testRouteProfilePage() {
		// ARRANGE
		UserModel testUser = new UserModel();
		String myExpectedStr1 = "/landing.html";
		String myExpectedStr2 = "/html/profile.html";
		when(session1.getAttribute("loggedUser")).thenReturn(null);
		when(session2.getAttribute("loggedUser")).thenReturn(testUser);

		// ACT
		String myTestStr1 = myCont.routeProfilePage(session1, "");
		String myTestStr2 = myCont.routeProfilePage(session2, "");

		// ASSERT
		assertEquals(myExpectedStr1, myTestStr1);
		assertEquals(myExpectedStr2, myTestStr2);
		verify(session1, times(1)).getAttribute("loggedUser");
		verify(session2, times(1)).getAttribute("loggedUser");
	}

	@Test
	void testLogoutMethod() {
		// ARRANGE
		String myExpectedStr = "/landing.html";

		// ACT
		String myTestStr = myCont.logoutMethod(session1);

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);
		verify(session1, times(1)).invalidate();
	}

	@Test
	void testRouteResetPassword() {
		// ARRANGE
		String myExpectedStr = "/html/password-reset.html";

		// ACT
		String myTestStr = myCont.routeResetPassword();

		// ASSERT
		assertEquals(myExpectedStr, myTestStr);

	}

}
