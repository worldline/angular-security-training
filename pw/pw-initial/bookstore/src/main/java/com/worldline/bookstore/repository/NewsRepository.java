package com.worldline.bookstore.repository;

import com.worldline.bookstore.domain.News;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the News entity.
 */
@SuppressWarnings("unused")
public interface NewsRepository extends JpaRepository<News,Long> {

}
