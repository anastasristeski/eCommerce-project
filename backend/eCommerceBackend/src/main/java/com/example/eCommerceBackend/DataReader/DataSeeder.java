package com.example.eCommerceBackend.DataReader;

import com.example.eCommerceBackend.Models.*;
import com.example.eCommerceBackend.Models.Product.Clothes;
import com.example.eCommerceBackend.Models.Product.Product;
import com.example.eCommerceBackend.Models.Product.TechProduct;
import com.example.eCommerceBackend.Repositories.ProductRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {
    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public DataSeeder(ProductRepository productRepository, ObjectMapper objectMapper) {
        this.productRepository = productRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws IOException {
        if (productRepository.count() == 0) {
            InputStream inputStream = getClass().getResourceAsStream("/static/data.json");
            JsonNode rootNode = objectMapper.readTree(inputStream);
            JsonNode productsNode = rootNode.path("data").path("products");
            List<Product> products = new ArrayList<>();
            for (JsonNode productNode : productsNode) {
                String category = productNode.path("category").asText();
                Product product;
                if (category.equalsIgnoreCase("clothes")) {
                    product = objectMapper.treeToValue(productNode, Clothes.class);
                } else if (category.equalsIgnoreCase("tech")) {
                    product = objectMapper.treeToValue(productNode, TechProduct.class);
                } else {
                    continue;
                }
                product.setAttributes(mapAttributes(productNode, product));
                product.setPriceItems(mapPrices(productNode, product));
                products.add(product);
            }
            productRepository.saveAll(products);
        }
    }

    private List<Attribute> mapAttributes(JsonNode productNode, Product product) {
        List<Attribute> attributesList = new ArrayList<>();
        JsonNode attributeJson = productNode.path("attributes");

        if (attributeJson.isArray()) {
            for (JsonNode outerAttributeJson : attributeJson) {

                        Attribute attribute = new Attribute();
                        attribute.setId(outerAttributeJson.path("id").asText());
                        attribute.setName(outerAttributeJson.path("name").asText());
                        attribute.setType(outerAttributeJson.path("type").asText());
                        attribute.setProduct(product);

                        List<Item> itemsList = new ArrayList<>();
                        JsonNode itemsJson = outerAttributeJson.path("items");
                        if (itemsJson.isArray()) {
                            for (JsonNode itemJson : itemsJson) {
                                Item item = new Item();
                                item.setDisplayValue(itemJson.path("displayValue").asText());
                                item.setValue(itemJson.path("value").asText());
                                item.setId(itemJson.path("id").asText());
                                item.setAttribute(attribute);
                                itemsList.add(item);
                            }
                        }
                        attribute.setItems(itemsList);
                        attributesList.add(attribute);


            }
        }
        return attributesList;
    }

    private List<PriceItem> mapPrices(JsonNode productNode, Product product) throws JsonProcessingException {
        List<PriceItem> priceItems = new ArrayList<>();
        JsonNode pricesNode = productNode.path("prices");
        if (pricesNode.isArray()) {
            for (JsonNode priceJson : pricesNode) {
                PriceItem priceItem = new PriceItem();
                priceItem.setAmount(priceJson.path("amount").asText());
                priceItem.setProduct(product);
                List<Currency> currencies = new ArrayList<>();
                JsonNode currencyJson = priceJson.path("currency");
                if (currencyJson.isArray()) {
                    for (JsonNode currencyNode : currencyJson) {
                        Currency currency = objectMapper.treeToValue(currencyNode, Currency.class);
                        currency.setPriceItem(priceItem);
                        currencies.add(currency);
                    }
                } else if (currencyJson.isObject()) {
                    Currency currency = new Currency();
                    currency.setLabel(currencyJson.path("label").asText());
                    currency.setSymbol(currencyJson.path("symbol").asText());
                    currency.setPriceItem(priceItem);
                    currencies.add(currency);
                }
                priceItem.setCurrencies(currencies);
                priceItems.add(priceItem);
            }

        }
        return priceItems;
    }

}