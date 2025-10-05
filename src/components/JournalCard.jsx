import JournalService from "../services/journal.service";

const JournalCard = (props) => {
    const handleDelete = async (itemId) => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this Journal?"
        );
        if (!isConfirmed) return;

        try {
            const response = await JournalService.deleteJournal(itemId)
            if (response.status === 200) {
                alert("Journal deleted successfully!");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
             <figure>
                <img src={props.coverImage || 
                    "https://sdmntprwestus2.oaiusercontent.com/files/00000000-b040-61f8-8b4b-249c6b27896b/raw?se=2025-10-05T02%3A59%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=8a768124-5afd-5be4-99a3-a85201d702b3&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-05T00%3A12%3A58Z&ske=2025-10-06T00%3A12%3A58Z&sks=b&skv=2024-08-04&sig=FCPgEePizdCyGjtYaMeOkClJ7pqB4s3GLA%2BCjEXQRlw%3D"} 
                    alt={props.itemType} />
            </figure>
            <div className="card-body">
                
                <h2 className="card-title justify-center">{props.title}</h2>

                <p><strong>Author(s):</strong> {props.author} </p>
               <p> <strong>Category:</strong> {props.category} </p>
               <p> <strong>Volume / Issue:</strong> {props.volume} / {props.issue} </p>
               <p> <strong>ISSN:</strong> {props.issn} </p>
                <p><strong>Year:</strong> {props.publishYear}</p>
                <p><strong>Publisher:</strong> {props.publisher}</p>


                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(props.itemId)}
                        className="btn btn-soft btn-error"
                    >
                        Delete
                    </button>
                    <a
                        href={"/updateJournal/" + props.itemId}
                        className="btn btn-soft btn-warning"
                    >
                        Edit
                    </a>
                </div>

            </div>
        </div>
    );
};

export default JournalCard;