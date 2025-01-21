/* Write your T-SQL query statement below */
SELECT stock_name, SUM(
    CASE operation WHEN 'Buy' THEN -1*price ELSE price END 
) as capital_gain_loss
    FROM Stocks
    GROUP BY stock_name