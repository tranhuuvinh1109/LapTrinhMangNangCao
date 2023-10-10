import { Button, Input, InputNumber, Upload } from 'antd';
import Modal from 'antd/es/modal/Modal';
import React, { useMemo, useState } from 'react';
import { BsFolderSymlink } from 'react-icons/bs';

const UserTableCard = ({ userCardTable }) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);

  const showRemovePopup = () => {
    setIsRemoveModalOpen(true);
  };

  const handleRemoveOk = () => {
    setIsRemoveModalOpen(false);
  };

  const handleRemoveCancel = () => {
    setIsRemoveModalOpen(false);
  };

  const showModifyPopup = () => {
    setIsModifyModalOpen(true);
  };

  const handleModifyOk = () => {
    setIsModifyModalOpen(false);
  };

  const handleModifyCancel = () => {
    setIsModifyModalOpen(false);
  };

  return (
    <div className="font-medium flex items-center border-b">
      <div className="w-1/12 flex justify-center">{userCardTable.id}</div>
      <div className="w-1/12 flex py-4 justify-center">
        <img className="w-10 h-10 rounded-full" src={userCardTable.avatar} alt="" />
      </div>
      <div className="w-2/12 flex justify-center">{userCardTable.username}</div>
      <div className="w-3/12 flex justify-center">{userCardTable.email}</div>
      <div className="w-1/12 flex items-end justify-center">{userCardTable.totalProjects}</div>
      <div className="w-1/12 flex justify-center">
        <a
          href={userCardTable.linkDrive}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center"
        >
          <BsFolderSymlink fontSize={20} />
        </a>
      </div>
      <div className="w-3/12 flex flex-row gap-8 items-center pl-8">
        <button
          className="bg-[#ff9d00] text-white text-sm px-4 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-70"
          onClick={showModifyPopup}
        >
          Modify
        </button>
        <Modal title="User Modification" open={isModifyModalOpen} onOk={handleModifyOk} onCancel={handleModifyCancel}>
          <div className="pt-4 px-2 flex flex-col">
            <div className="flex flex-row gap-4 items-center">
              <p>Avatar</p>
              <Upload>
                <Button className="">Choose photo..</Button>
              </Upload>
            </div>
            <p>Username</p>
            <Input placeholder="User's username" className="mb-2" />
            <p>Email</p>
            <Input placeholder="User's email" className="mb-2" />
            <div className="flex flex-row items-center gap-4 my-2">
              <p>Total Projects</p>
              <InputNumber size="large" min={1} max={10} defaultValue={3} />
            </div>
            <p>Drive link</p>
            <Input placeholder="URLs" className="mb-2" />
          </div>
        </Modal>

        <button
          className="bg-red-500 text-white text-sm px-4 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-70"
          onClick={showRemovePopup}
        >
          Remove
        </button>
        <Modal
          title="Remove this user?"
          open={isRemoveModalOpen}
          onOk={handleRemoveOk}
          onCancel={handleRemoveCancel}
          footer={[
            <Button key="back" onClick={handleRemoveCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleRemoveOk}>
              Confirm
            </Button>,
          ]}
        >
          <p>Do you wish to remove this user?</p>
        </Modal>
      </div>
    </div>
  );
};

const TableCard = ({ userTable, viewColumns }) => {
  const renderColumns = useMemo(() => {
    return Object.keys(viewColumns).map((item, index) => {
      return (
        <div className={'w-' + viewColumns[item] + '/12 flex justify-center'} key={index}>
          {item}
        </div>
      );
    });
  }, [viewColumns]);

  return (
    <div className="max-h-[775px] overflow-y-auto">
      <div className="bg-slate-200 text-slate-500 font-medium flex pt-3 pb-3">{renderColumns}</div>
      <div className="bg-slate-100">
        {userTable.map((user) => {
          return <UserTableCard userCardTable={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default TableCard;
