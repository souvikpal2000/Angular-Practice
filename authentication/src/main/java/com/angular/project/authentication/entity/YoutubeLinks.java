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
	@Column(name="title")
	String title;
	@Column(name="channel")
	String channel;
	@Column(name="image")
	String image;
	@Column(name="type")
	String type;
	@Column(name="description")
	String description;
	
	public YoutubeLinks() {}

	public YoutubeLinks(String id, String title, String channel, String image, String type,
			String description) {
		this.id = id;
		this.title = title;
		this.channel = channel;
		this.image = image;
		this.type = type;
		this.description = description;
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

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	
}
