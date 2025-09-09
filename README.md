# 🛒 E-Commerce App

A full-stack web application built with **Spring Boot** (backend) and **React** (frontend) that allows users to browse products, filter by category, add items with specifications to a cart, and place orders.  
It consumes a nested JSON dataset and maps it into a relational database with relations (attributes, items, prices, currencies, orders). The frontend maps backend DTOs into product cards and a responsive cart.

---

## 🚀 Features

### 📦 Products & Categories
- Browse all products or filter by category (all, clothes, tech).  
- Products include: id, name, brand, description, image gallery, inStock, attributes, prices.  
- Attribute types: text (e.g., Size) and swatch (colors) with multiple items.

### 🛍️ Cart & Orders
- Add products to cart with default or user-selected attribute values.  
- Cart stores chosen attribute values (`Map<String,String>`) per order item.  
- Place orders: `Order` (totalPrice) → `OrderItem` (name, price, quantity, values).

### 🎨 Frontend
- Built with React.  
- Responsive (desktop & mobile).  
- Products page fetches `/api/products` or `/api/products?category=...`.  
- `ProductCard` auto-selects default attribute values (first item) and calls `handleAddToCart`.  
- Add-to-cart available only if `inStock`.

### ⚙️ Backend
- Spring Boot REST API.  
- `DataSeeder` reads nested JSON and maps to entities on first run.  
- Entities: `Product` (and subclasses `Clothes`, `TechProduct`), `Attribute`, `Item`, `PriceItem`, `Currency`, `Order`, `OrderItem`.  
- JPA relationships with cascade to persist nested objects.

---

## 📊 DataSeeder — How the JSON is Processed

The `DataSeeder` is a Spring Boot component that automatically populates the database with products when the application starts.  
It reads a nested JSON file (`resources/static/data.json`) and maps it into the database with all associated relationships.

**Key points:**

- **Execution:** Runs at application startup via `CommandLineRunner`.
- **Conditional seeding:** Only seeds products if the database is empty (`productRepository.count() == 0`).
- **Product mapping:**
  - Maps products by category: `Clothes` or `TechProduct`.
  - Ignores products with unknown categories.
- **Attributes & Items:**
  - Each product can have multiple attributes (e.g., size, color).
  - Each attribute can have multiple items representing possible values.
- **Pricing & Currencies:**
  - Maps each product's prices, supporting multiple currencies.
  - Handles both single currency objects and arrays of currencies.
- **Persistence:**
  - Uses JPA with `cascade = CascadeType.ALL` so saving a product also saves its attributes, items, prices, and currencies.
  - Ensures the database contains fully connected product data ready for API consumption.

---

## 🗂 Entity Relationship Diagram (ERD)

Product
├── Attributes (1:N)
│ └── Items (1:N)
├── PriceItems (1:N)
│ └── Currencies (1:N)
└── Orders (via OrderItem)

markdown
Copy code

---

## 🖥 Frontend Mapping (Quick Summary)

**Products.jsx**
- `useParams()` reads category.
- `useEffect` fetches from `axiosClient.get("/products")` or `/products?category=...`.
- Stores response in `products` state and maps to `ProductCard`.

**ProductCard.jsx**
- Logs `product.attributesDtoList` for attribute DTOs.
- `getDefaultValues()` returns a map with each attribute defaulted to the first `itemsList[0].value`.
- `addToCartWithDefaults()` calls `handleAddToCart({ name, attributes, values, currency, price, image, inStock })`.
- Only shows add-to-cart button if `inStock`.

**Cart behavior**
- Cart items include `values (Map<String,String>)` to capture the chosen specification per order item.
- On checkout, create `Order` with `totalPrice` and list of `OrderItem` (persist via backend endpoint).

---

## 🛠️ Tech Stack

**Frontend**
- React
- Axios (API calls)
- React Router
- Framer Motion (animations)
- TailwindCSS / CSS

**Backend**
- Spring Boot
- Spring Data JPA (Hibernate)
- Jackson (ObjectMapper for JSON mapping)
- Lombok (optional)
- PostgreSQL (production) / H2 (local dev)

---

## 🔑 Example Endpoints
- `GET  /api/products` → Fetch all products
- `GET  /api/products?category=clothes` → Fetch by category
- `GET  /api/products/{name}` → Product details by name (`ProductDetailsDto`)
- `POST /api/cart/add` → Add item to cart (frontend local/cart API)
- `POST /api/orders` → Place an order (body: `OrderDTO`)
- `GET  /api/orders/{id}` → Get order by id

---

## 🖼️ Screenshots

🖼️ Screenshots<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 17 54" src="https://github.com/user-attachments/assets/d4c3df01-5c98-47b3-94f1-521a6a4d5719" />


<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 02" src="https://github.com/user-attachments/assets/74d6e5b2-f078-4758-8de5-5fcf1044ad76" />

<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 09" src="https://github.com/user-attachments/assets/0031f845-2c0d-4538-a7a7-7e530527c120" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 22" src="https://github.com/user-attachments/assets/2b0bcf39-bb57-478d-9d41-d97b90e31556" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 36" src="https://github.com/user-attachments/assets/33c090b6-6bbc-4804-8bd8-505a6360ba4a" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 41" src="https://github.com/user-attachments/assets/6d98cc98-0bac-4bed-9800-d12442a1848b" />
<img width="1680" height="1050" alt="Screenshot 2025-09-09 at 13 18 49" src="https://github.com/user-attachments/assets/8082fac7-284e-4a7c-84c7-89ad1301fcd7" />

