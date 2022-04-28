package com.worldline.bookstore.web.rest;

import com.worldline.bookstore.domain.ProductComment;

import com.worldline.bookstore.repository.ProductCommentRepository;
import com.worldline.bookstore.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing ProductComment.
 */
@RestController
@RequestMapping("/api")
public class ProductCommentResource {

    private final Logger log = LoggerFactory.getLogger(ProductCommentResource.class);

    private static final String ENTITY_NAME = "productComment";

    private final ProductCommentRepository productCommentRepository;

    public ProductCommentResource(ProductCommentRepository productCommentRepository) {
        this.productCommentRepository = productCommentRepository;
    }

    /**
     * POST /product-comments : Create a new productComment.
     *
     * @param productComment the productComment to create
     * @return the ResponseEntity with status 201 (Created) and with body the new
     *         productComment, or with status 400 (Bad Request) if the
     *         productComment has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/product-comments")

    public ResponseEntity<ProductComment> createProductComment(@Valid @RequestBody ProductComment productComment)
            throws URISyntaxException {
        log.debug("REST request to save ProductComment : {}", productComment);
        if (productComment.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists",
                    "A new productComment cannot already have an ID")).body(null);
        }
        ProductComment result = productCommentRepository.save(productComment);
        return ResponseEntity.created(new URI("/api/product-comments/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
                .body(result);
    }

    /**
     * PUT /product-comments : Updates an existing productComment.
     *
     * @param productComment the productComment to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated
     *         productComment,
     *         or with status 400 (Bad Request) if the productComment is not valid,
     *         or with status 500 (Internal Server Error) if the productComment
     *         couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/product-comments")

    public ResponseEntity<ProductComment> updateProductComment(@Valid @RequestBody ProductComment productComment)
            throws URISyntaxException {
        log.debug("REST request to update ProductComment : {}", productComment);
        if (productComment.getId() == null) {
            return createProductComment(productComment);
        }
        ProductComment result = productCommentRepository.save(productComment);
        return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, productComment.getId().toString()))
                .body(result);
    }

    /**
     * GET /product-comments : get all the productComments.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of
     *         productComments in body
     */
    @GetMapping("/product-comments")

    public List<ProductComment> getAllProductComments() {
        log.debug("REST request to get all ProductComments");
        List<ProductComment> productComments = productCommentRepository.findAll();
        return productComments;
    }

    /**
     * GET /product-comments/:id : get the "id" productComment.
     *
     * @param id the id of the productComment to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the
     *         productComment, or with status 404 (Not Found)
     */
    @GetMapping("/product-comments/{id}")

    public ResponseEntity<ProductComment> getProductComment(@PathVariable Long id) {
        log.debug("REST request to get ProductComment : {}", id);
        var productComment = productCommentRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(productComment);
    }

    /**
     * DELETE /product-comments/:id : delete the "id" productComment.
     *
     * @param id the id of the productComment to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/product-comments/{id}")

    public ResponseEntity<Void> deleteProductComment(@PathVariable Long id) {
        log.debug("REST request to delete ProductComment : {}", id);
        productCommentRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

}
