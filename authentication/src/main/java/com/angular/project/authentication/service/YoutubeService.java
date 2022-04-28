package com.angular.project.authentication.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angular.project.authentication.entity.YoutubeLinks;
import com.angular.project.authentication.repository.YoutubeRepo;

@Service
public class YoutubeService {
	
	@Autowired
	YoutubeRepo repo;
	
	public List<YoutubeLinks> getAllVideos() {
		List<YoutubeLinks> videos = repo.findAll();
		return videos;
	}

	public void addVideo(YoutubeLinks obj) {
		repo.save(obj);
	}
	
	@Transactional
	public void deleteVideoById(String id) {
		repo.deleteVideoById(id);
	}

	public List<YoutubeLinks> checkVideo(String id) {
		List<YoutubeLinks> list = repo.checkVideo(id);
		return list;
	}
	
	@Transactional
	public void updateVideo(String id, String title, String type, String description) {
		repo.updateVideoById(id, title, type, description);
	}
	
	
}
