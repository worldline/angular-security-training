package com.worldline.bookstore.web.rest;

import com.worldline.bookstore.domain.News;

import com.worldline.bookstore.repository.NewsRepository;
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
 * REST controller for managing News.
 */
@RestController
@RequestMapping("/api")
public class NewsResource {

    private final Logger log = LoggerFactory.getLogger(NewsResource.class);

    private static final String ENTITY_NAME = "news";

    private final NewsRepository newsRepository;

    public NewsResource(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    /**
     * POST /news : Create a new news.
     *
     * @param news the news to create
     * @return the ResponseEntity with status 201 (Created) and with body the new
     *         news, or with status 400 (Bad Request) if the news has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/news")

    public ResponseEntity<News> createNews(@Valid @RequestBody News news) throws URISyntaxException {
        log.debug("REST request to save News : {}", news);
        if (news.getId() != null) {
            return ResponseEntity.badRequest().headers(
                    HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new news cannot already have an ID"))
                    .body(null);
        }
        News result = newsRepository.save(news);
        return ResponseEntity.created(new URI("/api/news/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
                .body(result);
    }

    /**
     * PUT /news : Updates an existing news.
     *
     * @param news the news to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated
     *         news,
     *         or with status 400 (Bad Request) if the news is not valid,
     *         or with status 500 (Internal Server Error) if the news couldnt be
     *         updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/news")

    public ResponseEntity<News> updateNews(@Valid @RequestBody News news) throws URISyntaxException {
        log.debug("REST request to update News : {}", news);
        if (news.getId() == null) {
            return createNews(news);
        }
        News result = newsRepository.save(news);
        return ResponseEntity.ok()
                .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, news.getId().toString()))
                .body(result);
    }

    /**
     * GET /news : get all the news.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of news in body
     */
    @GetMapping("/news")

    public List<News> getAllNews() {
        log.debug("REST request to get all News");
        List<News> news = newsRepository.findAll();
        return news;
    }

    /**
     * GET /news/:id : get the "id" news.
     *
     * @param id the id of the news to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the news, or
     *         with status 404 (Not Found)
     */
    @GetMapping("/news/{id}")

    public ResponseEntity<News> getNews(@PathVariable Long id) {
        log.debug("REST request to get News : {}", id);
        var optNews = newsRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(optNews);
    }

    /**
     * DELETE /news/:id : delete the "id" news.
     *
     * @param id the id of the news to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/news/{id}")

    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        log.debug("REST request to delete News : {}", id);
        newsRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * POST /news/like/:id : add like to a given news.
     *
     * @param id the id of the news which will have its like number enhanced
     * @return the ResponseEntity with status 201 (Created) and with body the new
     *         news, or with status 400 (Bad Request) if the news has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/news/like/{id}")

    public ResponseEntity<News> addLikeforNews(@PathVariable Long id) throws URISyntaxException {
        log.debug("REST request to add like to News : {}", id);
        var optNews = newsRepository.findById(id);
        if (optNews.isPresent()) {
            var news = optNews.get();
            news.setLikes(news.getLikes() + 1);
            News result = newsRepository.save(news);
            return ResponseEntity.ok()
                    .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, id.toString()))
                    .body(result);
        }
        return ResponseEntity.status(500).build();
    }

    /**
     * GET /news/:id : get the "id" news.
     *
     * @param id the id of the news to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the news, or
     *         with status 404 (Not Found)
     */
    @GetMapping("/news/random")

    public ResponseEntity<News> getNews() {
        log.debug("REST request to get a random News");
        List<News> news = newsRepository.findAll();
        News randomNews = null;
        if (news != null) {
            double index = Math.floor(Math.random() * news.size());
            randomNews = news.get((int) index);
        }
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(randomNews));
    }

}
