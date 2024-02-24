1. Query should return the rows
   from your table where LastName = Smith or FirstName
   Robert and the rows should be sorted by Age in ascending order.

```sql
SELECT *
FROM your_table
WHERE LastName = 'Smith' OR (FirstName = 'Robert' AND LastName != 'Smith')
ORDER BY Age ASC;
```
