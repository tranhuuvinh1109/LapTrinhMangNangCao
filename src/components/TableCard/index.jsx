import Modal from 'antd/es/modal/Modal';
import React, { useMemo, useState } from 'react'
import { BsFolderSymlink } from 'react-icons/bs';

const UserTableCard = ({ userCardTable }) => {

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  // const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const showRemovePopup = () => {
    setIsRemoveModalOpen(true);
  };


  const handleRemoveOk = () => {
    setIsRemoveModalOpen(false);
  };

  const handleRemoveCancel = () => {
    setIsRemoveModalOpen(false);
  };

  // const showModifyPopup = () => {
  //   setIsModifyModalOpen(true);
  // };


  // const handleModifyOk = () => {
  //   setIsModifyModalOpen(false);
  // };

  // const handleModifyCancel = () => {
  //   setIsModifyModalOpen(false);
  // };

  return (
    <div className="max-h-[600px] overflow-y-auto">
      <div className='font-medium flex items-center border-b'>
        <div className='w-1/12 flex justify-center'>{userCardTable.id}</div>
        <div className='w-1/12 flex py-4 justify-center'>
          <img className='w-10 h-10 rounded-full' src={userCardTable.avatar} alt="" />
        </div>
        <div className='w-2/12 flex justify-center'>{userCardTable.username}</div>
        <div className='w-3/12 flex justify-center'>{userCardTable.email}</div>
        <div className='w-1/12 flex items-end justify-center'>{userCardTable.totalProjects}</div>
        <div className='w-1/12 flex justify-center'><a href={userCardTable.linkDrive} target="_blank" rel="noopener noreferrer" className='inline-block text-center'><BsFolderSymlink fontSize={20} /></a></div>
        <div className='w-3/12 flex flex-row gap-8 items-center pl-8'>
          {/* <button
            className="bg-[#ff9d00] text-white text-sm px-4 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-70"
            onClick={showModifyPopup}
          >
            Modify
          </button>
          <Modal
            title="Modify this user?"
            open={isModifyModalOpen}
            onOk={handleModifyOk} onCancel={handleModifyCancel}
          >
            <p>Do you wish to modify this user, just to test this modal?</p>
          </Modal> */}
          <button
            className="bg-red-500 text-white text-sm px-4 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-70"
            onClick={showRemovePopup}
          >
            Remove
          </button>
          <Modal
            title="Remove this user?"
            open={isRemoveModalOpen}
            onOk={handleRemoveOk} onCancel={handleRemoveCancel}
          >
            <p>Do you wish to remove this user?</p>
          </Modal>
        </div>
      </div>
    </div>
  )
}

const TableCard = ({ userTable, viewColumns }) => {
  // console.log("sda", userTable)
  const renderColumns = useMemo(() => {
    return (
      Object.keys(viewColumns).map((item, index) => {
        return (
          <div
            className={'w-' + (viewColumns[item]) + '/12 flex justify-center'} key={index}>{item}</div>
        )
      })
    )
  }, [viewColumns])

  return (
    <div className='max-h-[500px] overflow-y-auto'>
      <div className='bg-slate-100 text-slate-400 font-medium flex pt-6 pb-2'>
        {
          renderColumns
        }
      </div>
      <div>
        {
          userTable.map((user) => {
            return <UserTableCard userCardTable={user} key={user.id} />
          })
        }

      </div>
    </div>
  )
}

export default TableCard