package com.springreact.controller;

import javax.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class BoardController {
	@PostMapping("/ip")
	public ResponseEntity<String> ip (HttpServletRequest request) {
		System.out.println(request.getRemoteAddr());
		return ResponseEntity.ok("1234");
	}
}
