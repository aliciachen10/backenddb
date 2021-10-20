-- Add your code below and execute file in MySQL Shell --
select book_name, book_price from favorite_books a join book_prices b on a.book_price = b.id order by book_price;