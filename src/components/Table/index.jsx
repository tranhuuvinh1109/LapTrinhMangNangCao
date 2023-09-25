import React, { useMemo } from 'react';
import { BsFolderSymlink } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoCloudDoneOutline } from 'react-icons/io5'
import ProgressBar from '../ProgressBar';
import UserCard from '../UserCard';

const CardTable = ({ dataCardTable }) => {
	const createAt = useMemo(() => {
		const convert = new Date(dataCardTable.createAt);
		return (
			<span>
				{
					`${convert.getHours().toString().padStart(2, '0')}: ${convert.getMinutes().toString().padStart(2, '0')} - 
					${convert.getDay().toString().padStart(2, '0')}/${(convert.getMonth() + 1).toString().padStart(2, '0')}/${convert.getFullYear()}`
				}
			</span>
		)
	}, [dataCardTable.createAt])
	return (
		<div className='font-medium flex pl-4 py-4 items-center border-b'>
			<div className='w-8'>{dataCardTable.id}</div>
			<div className='w-3/12'>{dataCardTable.projectName}</div>
			<div className='w-1/12'>
				{dataCardTable.status === 'done' ?
					<div className='bg-green-300 flex justify-center items-center px-2 py-1 text-white rounded-full'>
						<IoCloudDoneOutline fontSize={14} /><span className='ml-1 text-sm'>Done</span>
					</div>
					:
					<div className='bg-orange-300 flex justify-center items-center px-2 py-1 text-white rounded-full'>
						<AiOutlineLoading3Quarters fontSize={14} className='animate-spin' /><span className='ml-1 text-sm'>Training</span>
					</div>
				}
			</div>
			<div className='w-2/12'><UserCard dataUserCard={dataCardTable.user} /></div>
			<div className='w-2/12 flex items-end justify-center'><ProgressBar progress={dataCardTable.progress} /></div>
			<div className='w-1/12'><a href={dataCardTable.linkDrive} target="_blank" rel="noopener noreferrer" className='inline-block text-center'><BsFolderSymlink fontSize={20} /></a></div>
			<div className='w-2/12'>{createAt}</div>
		</div>
	)
}


const Table = ({ dataTable }) => {
	return (
		<div className=''>
			<div className='bg-slate-100 text-slate-400 font-medium flex pt-6 pl-4 pb-2'>
				<div className='w-8'>No.</div>
				<div className='w-3/12'>Project Name</div>
				<div className='w-1/12'>Status</div>
				<div className='w-2/12'>User</div>
				<div className='w-2/12'>Progress</div>
				<div className='w-1/12'>Link Model</div>
				<div className='w-2/12'>Create At</div>
			</div>
			<div>
				{
					dataTable.map((cardTable) => {
						return <CardTable dataCardTable={cardTable} key={cardTable.id} />
					})
				}
			</div>
		</div>
	)
}

export default Table