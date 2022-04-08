package com.worldline.bookstore.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.hibernate.annotations.BatchSize;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Product.
 */
@Entity
@Table(name = "product")
@NamedEntityGraphs({
    @NamedEntityGraph(name = "comments", attributeNodes = @NamedAttributeNode("comments"))
})
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "author", nullable = false)
    private String author;

    @NotNull
    @Column(name = "price", precision=10, scale=2, nullable = false)
    private BigDecimal price;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "is_new")
    private Boolean isNew;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<ProductComment> comments = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Product name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public Product author(String author) {
        this.author = author;
        return this;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public Product price(BigDecimal price) {
        this.price = price;
        return this;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public Product description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public Product category(String category) {
        this.category = category;
        return this;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean isIsNew() {
        return isNew;
    }

    public Product isNew(Boolean isNew) {
        this.isNew = isNew;
        return this;
    }

    public void setIsNew(Boolean isNew) {
        this.isNew = isNew;
    }

    public Set<ProductComment> getComments() {
        return comments;
    }

    public Product comments(Set<ProductComment> productComments) {
        this.comments = productComments;
        return this;
    }

    public Product addComments(ProductComment productComment) {
        this.comments.add(productComment);
        productComment.setProduct(this);
        return this;
    }

    public Product removeComments(ProductComment productComment) {
        this.comments.remove(productComment);
        productComment.setProduct(null);
        return this;
    }

    public void setComments(Set<ProductComment> productComments) {
        this.comments = productComments;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Product product = (Product) o;
        if (product.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Product{" +
            "id=" + id +
            ", name='" + name + "'" +
            ", author='" + author + "'" +
            ", price='" + price + "'" +
            ", description='" + description + "'" +
            ", category='" + category + "'" +
            ", isNew='" + isNew + "'" +
            '}';
    }
}
