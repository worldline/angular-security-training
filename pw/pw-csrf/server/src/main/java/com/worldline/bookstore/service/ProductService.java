package com.worldline.bookstore.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.worldline.bookstore.domain.Product;
import com.worldline.bookstore.repository.ProductRepository;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class ProductService {
	private final Logger log = LoggerFactory.getLogger(ProductService.class);

	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Transactional(readOnly = true)
	public Product getProductWithComments(long id) {
		return productRepository.findOneWithCommentsById(id).orElse(null);
	}

}
