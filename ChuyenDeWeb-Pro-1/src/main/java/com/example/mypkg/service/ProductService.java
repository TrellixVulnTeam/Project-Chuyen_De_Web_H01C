package com.example.mypkg.service;

import java.util.List;

import com.example.mypkg.dto.DeliveryCostDTO;
import com.example.mypkg.dto.ProductDTO;

public interface ProductService {
	public List<ProductDTO> getAllProductsByProductType(String productType);

	public ProductDTO getProductById(Long productId);
	
	public List<ProductDTO> getAllProducts();


	public List<ProductDTO> getAllProductsByName(String name);

}
