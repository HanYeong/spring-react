package com.springreact.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springreact.domain.BoardVO;
import com.springreact.service.BoardService;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class BoardController {
	
	@Inject
	BoardService service;
	
	@GetMapping("/home")
	public ResponseEntity<List<BoardVO>> getHome(HttpServletRequest request) throws Exception {
		System.out.println(request.getRemoteAddr());
		List<BoardVO> list = null;
		list = service.list();
		System.out.println(list);
		return ResponseEntity.ok(list);
	}
}
