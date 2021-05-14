import "./sightcard.css"

export default function SightCard({ id, image, title, description, more }) {

    // console.log({ id, image, title, description, more });

    return (
        <div className="SightCard">
            <div>
                <div>
                    <img src={image} alt={title} />
                </div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>

            <div>
                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={"#modal" + id}>
                    Read more
                </button>

                <div className="modal fade" id={"modal" + id} tabIndex="-1" aria-labelledby={"modalLabel" + id} aria-hidden="true">

                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"modalLabel" + id}>{title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <img src={image} alt={title} style={{ width: "40%", float: "left", margin: "7px 12px 0 0" }} />
                                {more}
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}