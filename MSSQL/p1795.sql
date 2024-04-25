SELECT product_id, 'store1' as store, store1 as price
    FROM Products p
    WHERE store1 IS NOT NULL
UNION ALL
SELECT product_id, 'store2' as store, store2 as price
    FROM Products p
    WHERE store2 IS NOT NULL
UNION ALL
SELECT product_id, 'store3' as store, store3 as price
    FROM Products p
    WHERE store3 IS NOT NULL
