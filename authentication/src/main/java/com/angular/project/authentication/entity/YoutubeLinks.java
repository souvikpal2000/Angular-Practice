package com.angular.project.authentication.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="youtube")
public class YoutubeLinks {
	@Id
	@Column(name="id")
	String id;
	@Column(name="title", nullable = false)
	String title;
	
	public YoutubeLinks() {}

	public YoutubeLinks(String id, String title) {
		this.id = id;
		this.title = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	
	
}
