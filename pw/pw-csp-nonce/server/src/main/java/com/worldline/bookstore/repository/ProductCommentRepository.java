package com.worldline.bookstore.repository;

import com.worldline.bookstore.domain.ProductComment;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ProductComment entity.
 */
@SuppressWarnings("unused")
public interface ProductCommentRepository extends JpaRepository<ProductComment,Long> {

	List<ProductComment> findByProductId(Long id);

}
