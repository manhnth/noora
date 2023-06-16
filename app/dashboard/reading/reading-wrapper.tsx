'use client';

import Modal from '@/app/gui/modal.client';
import { useState } from 'react';

export default function ReadingWrapper() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal isVisible={showModal} onOutsideClick={() => setShowModal(false)}>
        hello
      </Modal>
      <div id="reading" className="w-full max-w-[40rem]">
        <div id="title">
          <span onClick={() => setShowModal(true)}>create</span>
        </div>
        <div id="content">
          <div id="row-header" className="grid grid-cols-12 text-grey-400">
            <div className="col-span-7">Name</div>
            <div className="col-span-3">Type</div>
            <div className="col-span-2">edit</div>
          </div>
          <div
            id="row-header"
            className="grid grid-cols-12 border-0 border-b-[1px] border-grey-500 "
          >
            <div className="col-span-7">1</div>
            <div className="col-span-3 border-l-[1px] border-grey-500">1</div>
            <div className="col-span-2 border-l-[1px] border-grey-500">f</div>
          </div>
        </div>
      </div>
    </>
  );
}
