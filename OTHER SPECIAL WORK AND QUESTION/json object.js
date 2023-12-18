const users = [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" }
  ]
  
  const orders = [
    { userId: 1, "id": 101, "name": "Product A", "price": 10 },
    { userId: 1, "id": 102, "name": "Product B", "price": 20 },
    { userId: 2, "id": 103, "name": "Product C", "price": 15 }
  ]
  
  
  const mergedResponse = [
    {
      "userId": 1,
      "userName": "Alice",
      "orders": [
        { "orderId": 101, "name": "Product A", "price": 10 },
        { "orderId": 102, "name": "Product B", "price": 20 }
      ]
    },
    {
      "userId": 2,
      "userName": "Bob",
      "orders": [
        { "orderId": 103, "name": "Product C", "price": 15 }
      ]
    },
    {
      "userId": 3,
      "userName": "Charlie",
      "orders": []
    }
  ]
  
  