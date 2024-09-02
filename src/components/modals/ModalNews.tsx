import React, { useEffect } from "react";
import Link from "next/link";

import { ModalStartProps, NewsApiCall } from "@/types";
import { testJSONAPIcall } from '@/test'

const ModalNews: React.FC<ModalStartProps> = ({ modalState }) => {

  return (
    <>
      {modalState && (
        <div className="h-fit">
          <h2 className="text-center text-2xl mb-6">Eventify News!</h2>
          <div className="bg-orange-200 border rounded-md justify-center align-center h-72 p-4 overflow-y-scroll scrollbar-custom">
            {testJSONAPIcall?.news.map((notice) => (
              <Link
                href={`/${notice.id}`}
                key={notice.id}
                className="cursor-pointer "
              >
                <section className=" justify-center align-center mb-4 border p-2 h-28 overflow-y-hidden hover:scale-105 hover:shadow-xl">
                  <p className="text-xl border-b-orange-600">{notice.title}</p>
                  <p className="text-sm">{notice.body}</p>
                </section>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalNews;
