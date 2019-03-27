import React from 'react';
import './style.sass';
import editIcon from '../images/edit.svg';
import removeIcon from '../images/remove.svg';
import doneIcon from '../images/done.svg';

export default function CardPresentational({
	name,
	desc,
	onEdit,
	onRemove,
	isEditing,
	handleNameChange,
	handleDescChange,
    onSave,
    onCancel
}) {
	return (
		<div className="card">
        { !isEditing &&
        <>
			<p className="card__heading">{name}</p>
			<p className="card__desc">{desc}</p>
			<div className="card__actions actions">
            <button onClick={onEdit} className="action">
					<img src={editIcon} alt="edit" className="action__img" />
				</button>
				<button onClick={onRemove} className="action">
					<img src={removeIcon} alt="remove" className="action__img" />
				</button>
            </div>
            </>
        }
            { isEditing &&
                <>
                <input value={name} onChange={handleNameChange} className="card__heading card__heading--input" />
			    <input value={desc} onChange={handleDescChange} className="card__desc card__desc--input" />
                <div className="card__actions actions">
				<button onClick={onSave} className="action">
					<img src={doneIcon} alt="done" className="action__img" />
				</button>
				<button onClick={onCancel} className="action">
					<img src={removeIcon} alt="cancel" className="action__img" />
				</button>
                </div>
                </>
            }
		</div>
	);
}
