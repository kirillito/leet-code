SELECT u.name, SUM(t.amount) as balance
    FROM Users u
        INNER JOIN Transactions t on t.account=u.account
    GROUP BY u.name
    HAVING SUM(t.amount)>10000