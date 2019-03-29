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
	handleInputChange,
    onSave,
	onCancel,
	innerRef,
	...rest
}) {
	return (
		<div ref={innerRef} {...rest} className="card">
        { !isEditing &&
        <>
			<div className="card__heading-container">
				<p className="card__heading">{name}</p>
			</div>
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
                <input value={name} onChange={e => handleInputChange('name', e)} className="card__heading card__heading--input" />
			    <textarea value={desc} onChange={e => handleInputChange('desc', e)} className="card__desc card__desc--input" />
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
