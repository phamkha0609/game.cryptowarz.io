import React from "react";
import "./Modal.scss";
import HistoryItem from "./HistoryItem";

function Modal({ isShow, stateChager, userStakes, setSubmitting, refetch }) {
	console.log(userStakes);

	return (
		<>
			{isShow ? (
				<div className="modal-wrap">
					<div className="content">
						<button onClick={() => stateChager(false)}>X</button>
						{userStakes.map((e, idx) => {
							return (
								<HistoryItem
									key={idx}
									stake={e}
									setSubmitting={setSubmitting}
									refetch={refetch}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}

export default Modal;
