package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	
	@GetMapping("/")
	public String routeLandingPage() {
		System.out.println("In the main controller");
		return "html/landing.html";
	}
	
	

}
