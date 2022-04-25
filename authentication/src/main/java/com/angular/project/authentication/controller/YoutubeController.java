package com.angular.project.authentication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angular.project.authentication.entity.YoutubeLinks;
import com.angular.project.authentication.service.YoutubeService;

@CrossOrigin
@RestController
public class YoutubeController {
	
	@Autowired
	YoutubeService service;
	
	@GetMapping("/getvideos")
	public List<YoutubeLinks> getVideos() {
		List<YoutubeLinks> videos = service.getAllVideos();
		return videos;
	}
	
	@PostMapping("/addvideo")
	public String addVideo(@RequestBody YoutubeLinks obj) {
		List<YoutubeLinks> list = service.checkVideo(obj.getId());
		if(list.size() > 0) {
			return "This Video Already Available!!!";
		}else {
			service.addVideo(obj);
			return "Video Added Successfully!!!";
		}
	}
	
	@DeleteMapping("/deletevideo/{id}")
	public String deleteVideo(@PathVariable("id") String id) {
		service.deleteVideoById(id);
		return "Video Deleted";
	}
}
