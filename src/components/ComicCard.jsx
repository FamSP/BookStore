import ComicService from "../services/comic.service";

const ComicCard = (props) => {
    const handleDelete = async (itemId) => {
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this Comic?"
        );
        if (!isConfirmed) return;

        try {
            const response = await ComicService.deleteComic(itemId)
            if (response.status === 200) {
                alert("Comic deleted successfully!");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={props.coverImage
                    || "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-9a58-61f7-9748-14f4efc93d85/raw?se=2025-10-05T03%3A07%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=f4d5bd94-3666-5c14-9562-1a20ed8752f8&skoid=0b778285-7b0b-4cdc-ac3b-fb93e8c3686f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-10-05T00%3A27%3A04Z&ske=2025-10-06T00%3A27%3A04Z&sks=b&skv=2024-08-04&sig=MsHTXXLdTgaYc0YpfvKHbLPIBolPwMJ0D7ajCDHOrg8%3D"
                }  
                alt={props.itemType} />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{props.title}</h2>

                <p><strong>Author:</strong> {props.author} </p>
                <p><strong>Illustrator:</strong> {props.illustrator} </p>
                <p><strong>Series:</strong> {props.series} </p>
                <p><strong>Volume:</strong> {props.volumeNumber} </p>
                <p> <strong>Year:</strong> {props.publishYear} </p>
                <p> <strong>ISBN:</strong> {props.isbn} </p>
                <p> <strong>Category:</strong> {props.category} </p>
                <p> <strong>Color:</strong> {props.colorType} </p>
                <p> <strong>Target Age:</strong> {props.targetAge}</p>


                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDelete(props.itemId)}
                        className="btn btn-soft btn-error"
                    >
                        Delete
                    </button>
                    <a
                        href={"/updateComic/" + props.itemId}
                        className="btn btn-soft btn-warning"
                    >
                        Edit
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ComicCard;