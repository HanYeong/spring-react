package com.springreact.service;

import java.util.List;

import com.springreact.domain.BoardVO;

public interface BoardService {
	public List<BoardVO> list() throws Exception;
}
