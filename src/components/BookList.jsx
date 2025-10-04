import BookCard from "./BookCard";

const BookList = ({ book }) => {
    return (
        <div className="flex">
            <div className="flex flex-wrap justify-center gap-4">


                
                    {book.map((book) => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        itemId={book.itemId}
                        author={book.author}
                        category={book.category}
                        publishYear={book.publishYear}
                        isbn={book.isbn}
                        status={book.status}
                        coverImage={book.coverImage}
                        description={book.description}
                        location={book.location}
                        addedDate={book.addedDate}
                        itemType={book.itemType}
                        edition={book.edition}
                        publisher={book.publisher}
                        pageCount={book.pageCount}
                        language={book.language}
                        genre={book.genre}
                        series={book.series}
                        volumeNumber={book.volumeNumber}
                        illustrator={book.illustrator}
                        colorType={book.colorType}
                        targetAge={book.targetAge}
                    />
                    ))}
                


            </div>
        </div>
    );
};
export default BookList;