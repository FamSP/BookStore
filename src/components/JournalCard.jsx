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
                <img src={props.coverImage} alt="Journal" />
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