package org.example.backend;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
class ProductController {

    private final List<Product> productList = new ArrayList<>();

    @GetMapping
    public List<Product> getAllProducts() {
        return productList;
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        String newId = UUID.randomUUID().toString();
        Product newProduct = new Product(newId, product.title(), product.description());

        productList.add(newProduct);
        System.out.println("Product added: " + newProduct);
        return newProduct;
    }
}