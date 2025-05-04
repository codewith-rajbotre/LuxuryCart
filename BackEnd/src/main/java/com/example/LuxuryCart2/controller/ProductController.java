package com.example.LuxuryCart2.controller;

import com.example.LuxuryCart2.model.Product;
import com.example.LuxuryCart2.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;

    @RequestMapping("/")
    public String greet(){

        return "Welcome to Ecommerce Website";
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product> > getAllProducts(){

        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK );
    }

    @GetMapping("/product/{id}")
    public ResponseEntity< Product> getProduct(@PathVariable int id){

        Product product = service.getProductById(id);
        if(product != null){


            return new ResponseEntity<>( product,  HttpStatus.OK );
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile){
        try{
            Product product1 = service.addproduct(product, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(e.getMessage() ,HttpStatus.BAD_REQUEST);
        }

    }
    @GetMapping("/product/{productId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable int productId){
        Product product = service.getProductById(productId);
        byte[] imageFile = product.getImageDate();

        return ResponseEntity.ok()
                .contentType(MediaType.valueOf(product.getImageType()))
                .body(imageFile);
    }
    @PutMapping("/product/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestPart Product product, @RequestPart MultipartFile imageFile){
        Product product1= null;
        try {
            product1 = service.updateProduct(id, product, imageFile);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        if(product1 != null){
            return new ResponseEntity<>("Product updated successfully", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>( "failed to update",HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("/product/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        Product product = service.getProductById(id);
        if(product != null) {
            service.deleteProduct(id);
            return new ResponseEntity<>("Product deleted successfully", HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>("failed to delete or Product not found",HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        List<Product> products = service.searchProducts(keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}
