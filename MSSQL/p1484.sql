/* Write your T-SQL query statement below */
SELECT 
        a.sell_date, 
        COUNT(DISTINCT a.product) as num_sold, 
        (STRING_AGG(a.product ,',') WITHIN GROUP(ORDER BY a.product ASC)) as products
    FROM (SELECT DISTINCT * FROM Activities) AS a
    GROUP BY a.sell_date
    ORDER BY a.sell_date ASC