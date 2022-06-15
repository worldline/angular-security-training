package com.worldline.bookstore.repository;

import com.worldline.bookstore.domain.Product;

import org.springframework.data.jpa.repository.*;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the Product entity.
 */
@SuppressWarnings("unused")
public interface ProductRepository extends JpaRepository<Product,Long> {

	@EntityGraph(attributePaths = "comments")
	Optional<Product> findOneWithCommentsById(Long id);

}
