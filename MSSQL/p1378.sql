/* Write your T-SQL query statement below */
SELECT eu.unique_id, e.name
    FROM Employees e
        LEFT JOIN EmployeeUNI as eu on e.id=eu.id 