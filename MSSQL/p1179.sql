SELECT id, Jan as [Jan_Revenue], Feb as [Feb_Revenue], Mar as [Mar_Revenue], Apr as [Apr_Revenue], May as [May_Revenue], Jun as [Jun_Revenue],
        Jul as [Jul_Revenue], Aug as [Aug_Revenue], Sep as [Sep_Revenue], Oct as [Oct_Revenue], Nov as [Nov_Revenue], Dec as [Dec_Revenue]
    FROM (
        SELECT id, revenue, month FROM Department
    ) AS Source PIVOT(MAX(revenue) FOR month in ([Jan],[Feb],[Mar],[Apr],[May],[Jun],[Jul],[Aug],[Sep],[Oct],[Nov],[Dec])) as PivotTable