package com.springreact.dao;

import java.util.List;

import com.springreact.domain.BoardVO;

public interface BoardDAO {
	public List<BoardVO> list() throws Exception;
}
