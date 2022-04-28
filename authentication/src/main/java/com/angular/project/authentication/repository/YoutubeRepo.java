package com.angular.project.authentication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.angular.project.authentication.entity.YoutubeLinks;

public interface YoutubeRepo extends JpaRepository<YoutubeLinks, Integer> {
	
	@Modifying
	@Query(nativeQuery = true, value="DELETE FROM youtube WHERE id=:id")
	void deleteVideoById(String id);
	
	@Query(nativeQuery = true, value="SELECT * FROM youtube WHERE id=:id")
	List<YoutubeLinks> checkVideo(String id);
	
	@Modifying
	@Query(nativeQuery = true, value="UPDATE youtube SET title=:title, type=:type, description=:description WHERE id=:id")
	void updateVideoById(String id, String title, String type, String description);

}
