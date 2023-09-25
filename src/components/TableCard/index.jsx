import React, { useMemo } from 'react'

const TableCard = ({ dataCard, viewColumns }) => {
  console.log("sda", Object.keys(dataCard[0]))
  const renderColumns = useMemo(() => {
    return (
      Object.keys(viewColumns).map((item, index) => {
        return (
          <div
            className={'w-' + (viewColumns[item]) + '/12'} key={index}>{item}</div>
        )
      })
    )
  }, [viewColumns])

  return (
    <div className=''>
      <div className='bg-slate-100 text-slate-400 font-medium flex pt-6 pb-2'>
        {
          renderColumns
        }

        {/* <div className='w-8'>No.</div>
        <div className='w-3/12'>Project Name</div>
        <div className='w-1/12'>Status</div>
        <div className='w-2/12'>User</div>
        <div className='w-2/12'>Progress</div>
        <div className='w-1/12'>Link Model</div>
        <div className='w-2/12'>Create At</div> */}
      </div>
      <div>
        {/* {
          dataCard.map((cardTable) => {
            return <CardTable dataCardTable={cardTable} key={cardTable.id} />
          })
        } */}

      </div>
    </div>
  )
}

export default TableCard