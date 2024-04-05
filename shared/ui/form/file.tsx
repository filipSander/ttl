import React, { ChangeEvent, useState } from 'react'
import { FileIcon } from '../icons/file'

const File = () => {
	const [file, setFile] = useState<File>()

	const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.currentTarget.files
		if (!fileList) return

		setFile(fileList[0])
	}
	return (
		<div className="field">
			<p>Файл</p>
			<label htmlFor="file">
				<FileIcon />
				<p>{file?.name ? file.name : 'Прикрепить Файл'}</p>
			</label>
			<input
				onChange={e => onInputChanged(e)}
				accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
				id="file"
				name="file"
				type="file"
			/>
		</div>
	)
}

export default File
