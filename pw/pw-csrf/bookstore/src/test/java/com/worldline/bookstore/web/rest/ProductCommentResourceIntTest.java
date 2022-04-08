package com.worldline.bookstore.web.rest;

import com.worldline.bookstore.BookstoreApp;

import com.worldline.bookstore.domain.ProductComment;
import com.worldline.bookstore.repository.ProductCommentRepository;
import com.worldline.bookstore.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the ProductCommentResource REST controller.
 *
 * @see ProductCommentResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BookstoreApp.class)
public class ProductCommentResourceIntTest {

    private static final Integer DEFAULT_RATE = 1;
    private static final Integer UPDATED_RATE = 2;

    private static final String DEFAULT_USER = "AAAAAAAAAA";
    private static final String UPDATED_USER = "BBBBBBBBBB";

    private static final String DEFAULT_COMMENT = "AAAAAAAAAA";
    private static final String UPDATED_COMMENT = "BBBBBBBBBB";

    @Autowired
    private ProductCommentRepository productCommentRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restProductCommentMockMvc;

    private ProductComment productComment;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
            ProductCommentResource productCommentResource = new ProductCommentResource(productCommentRepository);
        this.restProductCommentMockMvc = MockMvcBuilders.standaloneSetup(productCommentResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ProductComment createEntity(EntityManager em) {
        ProductComment productComment = new ProductComment()
                .rate(DEFAULT_RATE)
                .user(DEFAULT_USER)
                .comment(DEFAULT_COMMENT);
        return productComment;
    }

    @Before
    public void initTest() {
        productComment = createEntity(em);
    }

    @Test
    @Transactional
    public void createProductComment() throws Exception {
        int databaseSizeBeforeCreate = productCommentRepository.findAll().size();

        // Create the ProductComment

        restProductCommentMockMvc.perform(post("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productComment)))
            .andExpect(status().isCreated());

        // Validate the ProductComment in the database
        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeCreate + 1);
        ProductComment testProductComment = productCommentList.get(productCommentList.size() - 1);
        assertThat(testProductComment.getRate()).isEqualTo(DEFAULT_RATE);
        assertThat(testProductComment.getUser()).isEqualTo(DEFAULT_USER);
        assertThat(testProductComment.getComment()).isEqualTo(DEFAULT_COMMENT);
    }

    @Test
    @Transactional
    public void createProductCommentWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = productCommentRepository.findAll().size();

        // Create the ProductComment with an existing ID
        ProductComment existingProductComment = new ProductComment();
        existingProductComment.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restProductCommentMockMvc.perform(post("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(existingProductComment)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkUserIsRequired() throws Exception {
        int databaseSizeBeforeTest = productCommentRepository.findAll().size();
        // set the field null
        productComment.setUser(null);

        // Create the ProductComment, which fails.

        restProductCommentMockMvc.perform(post("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productComment)))
            .andExpect(status().isBadRequest());

        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkCommentIsRequired() throws Exception {
        int databaseSizeBeforeTest = productCommentRepository.findAll().size();
        // set the field null
        productComment.setComment(null);

        // Create the ProductComment, which fails.

        restProductCommentMockMvc.perform(post("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productComment)))
            .andExpect(status().isBadRequest());

        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllProductComments() throws Exception {
        // Initialize the database
        productCommentRepository.saveAndFlush(productComment);

        // Get all the productCommentList
        restProductCommentMockMvc.perform(get("/api/product-comments?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(productComment.getId().intValue())))
            .andExpect(jsonPath("$.[*].rate").value(hasItem(DEFAULT_RATE)))
            .andExpect(jsonPath("$.[*].user").value(hasItem(DEFAULT_USER.toString())))
            .andExpect(jsonPath("$.[*].comment").value(hasItem(DEFAULT_COMMENT.toString())));
    }

    @Test
    @Transactional
    public void getProductComment() throws Exception {
        // Initialize the database
        productCommentRepository.saveAndFlush(productComment);

        // Get the productComment
        restProductCommentMockMvc.perform(get("/api/product-comments/{id}", productComment.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(productComment.getId().intValue()))
            .andExpect(jsonPath("$.rate").value(DEFAULT_RATE))
            .andExpect(jsonPath("$.user").value(DEFAULT_USER.toString()))
            .andExpect(jsonPath("$.comment").value(DEFAULT_COMMENT.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingProductComment() throws Exception {
        // Get the productComment
        restProductCommentMockMvc.perform(get("/api/product-comments/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateProductComment() throws Exception {
        // Initialize the database
        productCommentRepository.saveAndFlush(productComment);
        int databaseSizeBeforeUpdate = productCommentRepository.findAll().size();

        // Update the productComment
        ProductComment updatedProductComment = productCommentRepository.findOne(productComment.getId());
        updatedProductComment
                .rate(UPDATED_RATE)
                .user(UPDATED_USER)
                .comment(UPDATED_COMMENT);

        restProductCommentMockMvc.perform(put("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedProductComment)))
            .andExpect(status().isOk());

        // Validate the ProductComment in the database
        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeUpdate);
        ProductComment testProductComment = productCommentList.get(productCommentList.size() - 1);
        assertThat(testProductComment.getRate()).isEqualTo(UPDATED_RATE);
        assertThat(testProductComment.getUser()).isEqualTo(UPDATED_USER);
        assertThat(testProductComment.getComment()).isEqualTo(UPDATED_COMMENT);
    }

    @Test
    @Transactional
    public void updateNonExistingProductComment() throws Exception {
        int databaseSizeBeforeUpdate = productCommentRepository.findAll().size();

        // Create the ProductComment

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restProductCommentMockMvc.perform(put("/api/product-comments")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(productComment)))
            .andExpect(status().isCreated());

        // Validate the ProductComment in the database
        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteProductComment() throws Exception {
        // Initialize the database
        productCommentRepository.saveAndFlush(productComment);
        int databaseSizeBeforeDelete = productCommentRepository.findAll().size();

        // Get the productComment
        restProductCommentMockMvc.perform(delete("/api/product-comments/{id}", productComment.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<ProductComment> productCommentList = productCommentRepository.findAll();
        assertThat(productCommentList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProductComment.class);
    }
}
